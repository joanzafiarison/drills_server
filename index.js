const express = require('express');
var cors = require('cors')
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use( cors() );

const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY


const ExerciseController = require("./router/exercise.route");
const User = require("./models/users");

app.get('/init', (req, res) => {
 // if Table Exercise dont exist 
 // if Table Move dont exist
 // if User dont exist
    //UserPref , UserHistoric , UserSchedule
 res.send("Home")
});

app.use('/exercises', ExerciseController );


app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    res.send(`user id ${id}`);
});

app.post("/auth", async (req,res) => {
    const { email , password } = req.body; 
    console.log("body",req.body)
    try {
        let user = await User.getUser({
            email : email,
            password : password
        });
        if(user.length == 1){
            // return token
            const expireIn = 24 * 60 * 60;
            const token = jwt.sign({
                user : user[0]
            },
            SECRET_KEY,
            {
                expiresIn : expireIn
            });

            res.header('Authorization', 'Bearer ' + token);

            return res.status(200).json('auth_ok');
        }
        else {
            return res.status(404).json('user not found');
        }
    }
    catch(err) {
        return res.status(501).json(err);
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