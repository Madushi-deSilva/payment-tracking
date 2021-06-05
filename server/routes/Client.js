var express = require('express');
var app = express();
var database = require('../config/database');

//insert client details to the database
app.post(('/create'), (req, res) => {
    const company_name = req.body.company_name;
    const email = req.body.email;
    const address = req.body.address;
    const tel_no = req.body.tel_no;
    const payment_mode = req.body.payment_mode;
    const contact_person = req.body.contact_person;
    const personal_email = req.body.personal_email;
    const mobile_no = req.body.mobile_no;
    const bank_name = req.body.bank_name;
    const bank_branch = req.body.bank_branch;
    const bank_code = req.body.bank_code;
    const account_no = req.body.account_no;

    database.query(
        'INSERT INTO client (company_name, email, address, tel_no, payment_mode, contact_person, personal_email, mobile_no, bank_name, bank_branch, bank_code, account_no) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', 
        [company_name, email, address, tel_no, payment_mode, contact_person, personal_email, mobile_no, bank_name, bank_branch, bank_code, account_no], (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send("values inserted")
            }
        }
    );
    

});

//get all clients
app.get(('/allclients'),(req, res) => {
    database.query(
        "SELECT * FROM client", 
        (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send(result)
            }
    });
});


module.exports = app;
