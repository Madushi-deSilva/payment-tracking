const mysql = require('mysql');

//create database connection
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "cricket49",
    database: "geoid"
});

module.exports = con;