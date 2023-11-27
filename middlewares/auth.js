
const jwt  = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

//middleware auth
//lorsque l'on veut accéder à une route protégée 
// on peut utiliser l'auth middleware qui va extraire
// l'header authorization

const auth  = ( req, res, next ) =>  {
    const headers = req.headers;
    const { email } = req.body;
    if(headers.authorization) {
        let token = headers.authorization.split(" ")[1];
        console.log("token ",  token);
        let userData = jwt.decode(token,  process.env.SECRET_KEY)
        if( email == userData.email ){
            next();
        }
    }
    else {
        console.log("no token provided")
    }
    res.status(403).send("Auth error");

   
}

module.exports = auth;