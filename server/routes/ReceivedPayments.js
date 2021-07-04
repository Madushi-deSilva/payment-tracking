var express = require('express');
var app = express();
var database = require('../config/database');

//get all received due payments
app.get(('/allreceiveddue'),(req, res) => {
    database.query(
        "SELECT r.receivedDue_ID, c.company_name, r.invoice,c.tel_no, c.email, r.amount, r.due_ID FROM received_due_payments r INNER JOIN client c ON c.code = r.company_code ORDER BY r.receivedDue_ID ASC",
        (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send(result)
            }
    });
});

//update due payment table when clicking the update button in  received payments page
app.put(('/receiveddue/update/:id'), (req, res) => {
    console.log('Req ok', req.params.id)
    const due_ID = req.params.id;
    let sql = `UPDATE due_payment SET collected_status = ? WHERE due_ID = ?`;
    database.query(sql, [1, due_ID], (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send("values updated")
            }
        }
    );
});


//get all received overdue payments
app.get(('/allreceivedoverdue'),(req, res) => {
    database.query(
        "SELECT r.receivedOverdue_ID, c.company_name, r.invoice,c.tel_no, c.email, r.amount, r.overdue_ID FROM received_overdue_payments r INNER JOIN client c ON c.code = r.company_code ORDER BY r.receivedOverdue_ID ASC",
        (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send(result)
            }
    });
});

//update overdue payment table when clicking the update button in  received payments page
app.put(('/receivedoverdue/update/:id'), (req, res) => {
    console.log('Req ok', req.params.id)
    const overdue_ID = req.params.id;
    let sql = `UPDATE overdue_payment SET collected_status = ? WHERE overdue_ID = ?`;
    database.query(sql, [1, overdue_ID], (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send("values updated")
            }
        }
    );
});

module.exports = app;