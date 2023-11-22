const express = require('express');
var cors = require('cors')
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use( cors() );

const User = require("./models/users");

app.get('/init', (req, res) => {
 // if Table Exercise dont exist 
 // if Table Move dont exist
 // if User dont exist
    //UserPref , UserHistoric , UserSchedule
 res.send("Home")
});

app.get('/exercise/:id', (req, res) => {
    const id = req.params.id;
    res.send(`get exercise id ${id}`)
});

app.post('/exercise/', (req, res) => {
    const { query } = req.body;
    res.send("get exercises")
});

app.post('/exercise/save', (req, res) => {
    const { query } = req.body;
    res.send("get exercises")
});

app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    res.send(`user id ${id}`);
});

app.post("/auth", async (req,res) => {
    const { email , password } = req.body; 
    try {
        let user = await User.getUser({
            email : email,
            password : password
        });
        if(user.length == 1){
            // return token
            res.send(JSON.stringify(user[0]));
        }
        else {
            res.send("no user found")
        }
    }
    catch(err) {
        res.send(JSON.stringify(err))
    }
    
});

app.post("/register", (req, res) => {
    const { userData } = req.body;
    res.send(JSON.stringify(userData));
})

app.get("/video", (req,res) => {
    res.send("video")
});

app.listen(5000 , () => {
    console.log("server running");
})