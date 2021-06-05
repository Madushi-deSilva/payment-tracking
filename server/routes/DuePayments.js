var express = require('express');
var app = express();
var database = require('../config/database');

//insert user details to the database
app.post(('/create'), (req, res) => {
    const invoice = req.body.invoice;
    const amount = req.body.amount;
    const due_date = req.body.due_date;
    const reply_status = req.body.reply_status;
    const collected_status = req.body.collected_status;
    const note = req.body.note;
    const code = req.body.code;

    database.query(
        'INSERT INTO due_payment (invoice, amount, due_date, reply_status, collected_status, note, code) VALUES (?, ?, ?, ?, ?, ?, ?)', 
        [invoice, amount, due_date, reply_status, collected_status, note, code], (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send("values inserted")
            }
        }
    );
    

});

module.exports = app;
