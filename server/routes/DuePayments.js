var express = require('express');
var app = express();
const nodemailer = require('nodemailer');
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
                res.status(200).send("values inserted")
            }
        }
    );
});

//get all due payments from the databse and send to frontend
app.get(('/alldue'),(req, res) => {
    database.query(
        "SELECT d.due_ID, c.company_name, d.invoice, d.due_date, c.tel_no, c.email, d.amount, d.reply_status, d.collected_status FROM due_payment d INNER JOIN client c ON c.code = d.company_code ORDER BY d.due_ID ASC",
        (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send(result)
            }
    });
});

//get all due payments that should settle today from the database(CONDITION -> DUE DATE = DATE OF TODAY AND REPLY STATUS = READY FOR PAYMENT) and send to home page
app.get(('/home/alldue'),(req, res) => {
    database.query(
        "SELECT d.due_ID, c.company_name, d.invoice, c.contact_person, c.mobile_no, c.email, d.amount FROM due_payment d INNER JOIN client c ON c.code = d.company_code WHERE d.due_date = CURDATE() AND d.reply_status = 'Ready for payment' ORDER BY d.due_ID ASC",
        (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send(result)
            }
    });
});

//get all due payments that should settle today from the database(CONDITION -> DUE DATE = DATE OF TODAY AND REPLY STATUS = READY FOR PAYMENT) and send  to credit collector page
app.get(('/credit/alldue'),(req, res) => {
    database.query(
        "SELECT d.due_ID, d.invoice, c.company_name, c.address, c.tel_no, c.contact_person, c.mobile_no, d.amount, d.credit_collected_status FROM due_payment d INNER JOIN client c ON c.code = d.company_code WHERE d.due_date = CURDATE() AND d.reply_status = 'Ready for payment' ORDER BY d.due_ID ASC",
        (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send(result);
            }
    });
});

//update due payment details according to credit collector
app.put(('/credit/update/:id'), (req, res) => {
    const due_ID = req.params.id;
    let sql = `UPDATE due_payment SET credit_collected_status = ? WHERE due_ID = ?`;
    database.query(sql, [1, due_ID], (err, result) => {
            if(err){
                console.log(err)
            }else{
                //insert collected payment to received due payments table
                database.query(
                    'INSERT IGNORE INTO received_due_payments (company_code, invoice, amount, due_ID, received_date) SELECT company_code, invoice, amount, due_ID, due_date FROM due_payment d WHERE d.due_date = CURDATE() AND d.credit_collected_status = "1"',(err, result) => {
                        if(err){
                            console.log(err)
                        }else{
                            res.send("values inserted")
                        }
                    }
                );
            }
        }
    );
});

//view due payment by id
app.get(('/:id'),(req, res) => {
    const due_ID = req.params.id;
    database.query(
        "SELECT d.due_ID, c.client_ID,  c.company_name, c.tel_no, c.email, d.payment_mode, d.invoice, d.amount, d.due_date, d.note, d.reply_status FROM due_payment d INNER JOIN client c ON c.code = d.company_code WHERE due_ID = ?", [due_ID],
        (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send(result)
            }
    });
});

//update due payment details in the database
app.put(('/update/:id'), (req, res) => {
    const due_ID = req.params.id;
    const due_date = req.body.due_date;
    const reply_status = req.body.reply_status;
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

//delete due payment details in the database
app.delete(('/delete/:id'), (req, res) => {
    const due_ID = req.params.id;
    const reply_status = req.body.status;

    // if the reply status = "not replied", then insert record to the overdue payment table and delete the record from due payment table
    if(reply_status === "Not replied"){
        let sql = `INSERT INTO overdue_payment (invoice, amount, payment_mode, due_date, note,reply_status,company_code,due_ID) SELECT invoice, amount, payment_mode, due_date, note,reply_status, company_code, due_ID FROM due_payment d WHERE d.reply_status = "Not replied"`;
        database.query(sql,(err, result) => {
                if(err){
                    console.log(err)
                }else{
                    database.query(
                        'DELETE FROM due_payment WHERE due_ID = ? AND reply_status = "Not replied"', [due_ID, reply_status], (err, result) => {
                            if(err){
                                console.log(err)
                            }else{
                                res.send("values deleted")
                            }
                        }
                    );
                }
            }
        );
    //else, delete the record from the due payment table
    }else{
        console.log('4')
        database.query(
            'DELETE FROM due_payment WHERE due_ID = ?', due_ID, (err, result) => {
                if(err){
                    console.log(err)
                }else{
                    res.send("values deleted")
                }
            }
        );
    }
});

//view due payment by id in email form
app.get(('/duemail/:id'),(req, res) => {
    const due_ID = req.params.id;
    database.query(
        "SELECT c.email, d.amount, d.due_date FROM due_payment d INNER JOIN client c ON c.code = d.company_code WHERE due_ID = ?", [due_ID],
        (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send(result)
            }
    });
});

//send reminder email to client
app.post('/duemail', (req, res) => {

    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: 'mdsi.desilva@gmail.com', //email address of the sender
            pass: 'mdsi123+*' //password of the sender
        }
    });

    let mailOptions = {
        from: data.from, //get the data from the user
        to: data.to, //get the data from the user
        subject: 'Regarding the Due Payment',
        html: `

        <p>Dear Sir/ Madam,</p>
        <p>You have a payment of Rs.${data.amount} due on ${data.duedate}.  We are expecting a response within tommorrow.</p>
        <p>Thank & Regards<br>
        Madushi De Silva<br>
        GEOID Information Technologies (Pvt)Ltd.<br>
        Kandy Road, Dalugama, Sri Lanka <br>
        Contact: 0773422811</p>

        `
    };

    smtpTransport.sendMail(mailOptions, (error, response) => {
        if (error) {
            res.send(error)
        } else {
            res.send("Success")
        }
    })

    smtpTransport.close();
})

module.exports = app;
