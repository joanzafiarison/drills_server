
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
        let userData = jwt.decode(token,  process.env.SECRET_KEY);
        try {
            if( userData.user && userData.user.email== email ){
                console.log('mail ok');
                next();
            }
            else {
                res.send("not ok")
            }
        } catch(err) {
            throw err;
        }

    }
    else {
        console.log("no token provided")
    }

   
}

module.exports = auth;