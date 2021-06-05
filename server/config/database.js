const mysql = require('mysql');

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "cricket49",
    database: "tracker"
});

module.exports = con;