var express = require('express');
var app = express();
var database = require('../config/database');

//get all overdue payments
app.get(('/alloverdue'),(req, res) => {
    database.query(
        "SELECT o.overdue_ID, c.company_name, o.invoice, c.tel_no, c.email, o.amount FROM overdue_payment o INNER JOIN client c ON c.code = o.company_code ORDER BY o.overdue_ID ASC",
        (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send(result)
            }
    });
});

    //get all overdue payments to home
app.get(('/home/alloverdue'),(req, res) => {
    database.query(
        "SELECT o.overdue_ID, c.company_name, o.invoice, c.contact_person, c.mobile_no, c.email, o.amount FROM overdue_payment o INNER JOIN client c ON c.code = o.company_code WHERE o.due_date = CURDATE() AND o.reply_status = 'Replied' ORDER BY o.overdue_ID ASC",
        (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send(result)
            }
    });
});


//get overdue payment by id
app.get(('/:id'),(req, res) => {
    const overdue_ID = req.params.id;
    database.query(
        "SELECT o.overdue_ID, c.client_ID,  c.company_name, c.tel_no, c.email, o.payment_mode, o.invoice, o.amount, o.due_date, o.note, o.reply_status FROM overdue_payment o INNER JOIN client c ON c.code = o.company_code WHERE overdue_ID = ?", [overdue_ID],
        (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send(result)
            }
    });
});

//update overdue payment details to the database
app.put(('/update/:id'), (req, res) => {
    const overdue_ID = req.params.id;
    // const due_date = req.body.due_date;
    const reply_status = req.body.reply_status;
    // const collected_status = req.body.collected_status;
    const note = req.body.note;

    database.query(
        'UPDATE overdue_payment SET reply_status = ?, note = ? WHERE overdue_ID = ?', 
        [reply_status, note, overdue_ID], (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send("values updated")
            }
        }
    );
    

});

//delete overdue payment details to the database
app.delete(('/delete/:id'), (req, res) => {
    const overdue_ID = req.params.id;

    database.query(
        'DELETE FROM overdue_payment WHERE overdue_ID = ?', overdue_ID, (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send("values deleted")
            }
        }
    );
    

});

module.exports = app;