const EXERCISE_URL = "http://localhost:5000/exercise";
const MOVE_URL = "http://localhost:5000/move";

const MOCKDB = {
    "exercises" : [
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
    ],
    "moves" : [
        {

        }
    ]
}
async function getExerciseById( id ){
    const init = {
        method : "GET"
    };
    let exercise = {};
    try {
        exercise = await fetch(`${EXERCISE_URL}/${id}`, init);
    }
    catch(e) {
        console.log(e)
    }
    return exercise ;
}

async function getExercises( query ){
    const init = {
        method : "POST",
        body : JSON.stringify(query)
    };
    let exercises = [];
    try {
        await fetch(`${EXERCISE_URL}`,init);
    }
    catch(e) {
        console.log(e)
    }
   
    return exercises;

}

async function saveExercise( data ){
    const init = {
        method : "POST",
        body : JSON.stringify(data)
    };
    await fetch(`${EXERCISE_URL}/save`, init);
}

async function getMoveById( id ) {
    const init = {
        method : "GET"
    };
    let move = {};
    try {
        move = await fetch(`${MOVE_URL}/${id}`, init );
    }
    catch (e) {
        console.log(e);
    }

    return move;
}

async function getMoves( query ) {
    const init = {
        method : "POST"
    };
    let moves = [];
    try {
        moves = await fetch(`${MOVE_URL}`, init );
    }
    catch (e) {
        console.log(e);
    }

    return moves;
}

async function saveMove( data ){
    const init = {
        method : "POST",
        body : JSON.stringify(query)
    };
    await fetch(`${MOVE_URL}/save`, init);
}

module.exports = {
    getExerciseById,
    getExercises,
    saveExercise,
    getMoveById,
    getMoves,
    saveMove
}