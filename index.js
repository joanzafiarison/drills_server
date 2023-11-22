const express = require('express');
var cors = require('cors')
const app = express();

app.use( cors() );

app.get('/', (req, res) => {
 // if Table Exercise dont exist 
 // if Table Move dont exist
 // if User dont exist
    //UserPref , UserHistoric , UserSchedule
 res.send("Home")
});

app.get('/exercise/:id', (req, res) => {
    res.send("get exercise id")
});

app.post('/exercise/', (req, res) => {
    res.send("get exercises")
});

app.get('/user', (req, res) => {
    res.send("user")
});

app.post("/auth", (req,res) => {
    console.log("hit");
    const [email , password] = req.body; 
    if(email = "jo@"){
        res.send("auth");
    }
    else {
        res.send("auth not complete");
    }
    
});

app.get("/video", (req,res) => {
    res.send("video")
});

app.listen(5000 , () => {
    console.log("server running");
})