const query  = require("../models/connexion").query;

test ("it connects to db", async () =>{
    let users = await query("SELECT * FROM users");
    expect(users.length).toBe(5);
})

test ("there is a user named 'FRANCK'", async () =>{
    let users = await query("SELECT * FROM users");
    expect(users.filter(x => x.name == "FRANCK").length).toBe(1);
})