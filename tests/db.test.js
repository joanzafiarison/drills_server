const query  = require("../models/connexion").query;
const User = require("../models/users");

test ("it connects to db", async () =>{
    let users = await query("SELECT * FROM users");
    expect(users.length).toBe(5);
})

test ("there is a user named 'FRANCK'", async () =>{
    let users = await query("SELECT * FROM users");
    expect(users.filter(x => x.name == "FRANCK").length).toBe(1);
})

test('get User by email and password', async() => {
    let user = await User.getUser({
        email : "Judi@mail.com",
        password : "IBNDOIDEZ"
    })
    expect(user[0].email).toBe("Judi@mail.com");
})

test('save a new User', async () => {
    await User.saveUser({
        name : "Joan",
        email : "joanzaf@lilo.org",
        password : "mdp",
        pseudo :"bendo"
    });
    let user_found = await User.getUser({
        email : "joanzaf@lilo.org",
        password : "mdp"
    })
    expect(user_found[0].name).toBe("Joan");
})