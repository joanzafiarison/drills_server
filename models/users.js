const query = require("../models/connexion").query;

/*
interface UserModel {
    name : string
    pseudo : string 
    email : string
    password :string
    created_at :datetime
}

Interface UserFavorites {
    name : string
    value : string
}

Interface UserSchedules {
    datetime : datetime 
    type : string
    event_id : number
    status : string

}

Interface UserHistorics {
    exercise_id : number 
    user_id : number 
    note : string
    mark : number
    attachment : string
}
*/

async function getUser( data ){
    let user = {};
    try {
        user = await query(`SELECT * FROM users WHERE email = '${data.email}' and password = '${data.password}'`)
    }
    catch(e) {
        throw e;
    }
    return user;
}

async function saveUser( data ){
    try {
        await query(`INSERT INTO users (name, pseudo, email, password ) VALUES ('${data.name}', '${data.pseudo}', '${data.email}', '${data.password}')`);
    }
    catch(e) {
        throw e;
    }
}


async function deleteUser( email ){
    try {
        await query(`DELETE FROM users WHERE email = '${email}'`);
    }
    catch(e) {
        throw e;
    }
}

module.exports = {
    getUser,
    saveUser,
    deleteUser
}