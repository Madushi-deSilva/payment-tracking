const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "cricket49",
    database: "geoid"
});

module.exports = con;