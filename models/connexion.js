const mysql = require('mysql');
const dotenv = require('dotenv');
const util = require('util');

dotenv.config();

var connexion = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

const query = util.promisify(connexion.query).bind(connexion);

const init = async () => {
    const tables = ["sports", "moves" , "categories" , "exercisemoves", "users","userschedules","userfavorites","userhistorics"];
    for( let table of tables) {
        try {
            let rows = await query(`SELECT * FROM ${table}`);
            console.log(rows.length);
            if( rows.length == 0){
                //get Model and FIll
            }
        }
        catch (err) {
            connexion.end();
        }
    }
   
    
}

module.exports = {
    query,
    init
} 