var express = require('express');
var app = express();
var database = require('../config/database');

//insert payment to the database
app.post(('/create'), (req, res) => {
    const company_code = req.body.company_code;
    const company_name = req.body.company_name;
    const payment_mode = req.body.payment_mode;
    const invoice = req.body.invoice;
    const amount = req.body.amount;
    const due_date = req.body.due_date;
    const reply_status = req.body.reply_status;
    const collected_status = req.body.collected_status;
    const note = req.body.note;

    database.query(
        'INSERT INTO due_payment (company_code, company_name, payment_mode, invoice, amount, due_date, reply_status, collected_status, note) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', 
        [company_code, company_name, payment_mode, invoice, amount, due_date, reply_status, collected_status, note], (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send("values inserted")
            }
        }
    );
});

//get all due payments
app.get(('/alldue'),(req, res) => {
    database.query(
        "SELECT d.due_ID, c.company_name, d.invoice, d.due_date, c.tel_no, c.email, d.amount FROM due_payment d INNER JOIN client c ON c.code = d.company_code",
        (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send(result)
            }
    });
});

//get all due payments to home
app.get(('/home/alldue'),(req, res) => {
    database.query(
        "SELECT d.due_ID, c.company_name, d.invoice, c.contact_person, c.mobile_no, c.email, d.amount FROM due_payment d INNER JOIN client c ON c.code = d.company_code",
        (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send(result)
            }
    });
});

//get due payment by id
app.get(('/:id'),(req, res) => {
    const due_ID = req.params.id;
    database.query(
        "SELECT d.due_ID, c.company_name, c.tel_no, c.email, d.payment_mode, d.invoice, d.amount, d.due_date, d.note, d.reply_status FROM due_payment d INNER JOIN client c ON c.code = d.company_code WHERE due_ID = ?", [due_ID],
        (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send(result)
            }
    });
});

//update due payment details to the database
app.put(('/update/:id'), (req, res) => {
    const due_ID = req.params.id;
    const due_date = req.body.due_date;
    const reply_status = req.body.reply_status;
    // const collected_status = req.body.collected_status;
    const note = req.body.note;

    database.query(
        'UPDATE due_payment SET due_date = ?, reply_status = ?, note = ? WHERE due_ID = ?', 
        [due_date, reply_status, note, due_ID], (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send("values updated")
            }
        }
    );
    

});

//delete due payment details to the database
app.delete(('/delete/:id'), (req, res) => {
    const due_ID = req.params.id;

    database.query(
        'DELETE FROM due_payment WHERE due_ID = ?', due_ID, (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send("values deleted")
            }
        }
    );
    

});

module.exports = app;
