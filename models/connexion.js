var mysql = require('mysql');
var dotenv = require('dotenv');
dotenv.config();

var connexion = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

module.export = connexion;