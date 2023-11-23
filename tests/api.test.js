const { getExerciseById, getExercises, saveExercise , authenticate} = require("../utils/api");


test("connect successfully", async () => {
    const data = {
        email : "Judi@mail.com",
        password : "IBNDOIDEZ"
        
    }
    expect( await authenticate( data )).toBe({
        "name" : "Judith"
    })
})

test("get Exercise with id x ", async () => {
    expect( await getExerciseById(1)).toBe({
       id : 1,
       name : "exercise Test",
       sport :"mma",
       type : "strength",
       duration : 30 * 60,
       stretch : [5, 76, 54],
       train : [3,5,8],
       warming : [34, 21, 10] 
    });
});

test("get Exercises by query ", async () => {
    expect( await getExercises({ sport : "mma" })).toBe([
        {
            id : 1,
            name : "exercise Test",
            sport :"mma",
            type : "strength",
            duration : 30 * 60,
            stretch : [5, 76, 54],
            train : [3,5,8],
            warming : [34, 21, 10] 
        },
        {
            id : 2,
            name : "exercise 2 MMA",
            sport :"mma",
            type : "stamina",
            duration : 30 * 60,
            stretch : [5, 32, 14],
            train : [1,2,9],
            warming : [14, 1, 9] 
        }
    ])
})


test(" save exercise ", async() => {
    await saveExercise({
        name :"exercise MMA TEST",
        sport :"mma",
        type : "stamina",
        duration : 30 * 60,
        stretch : [5, 76, 54],
        train : [3,5,8],
        warming : [34, 21, 10] 
    });
    expect( await getExercises({ name : "exercise MMA TEST"}).length).toBe(1);
});