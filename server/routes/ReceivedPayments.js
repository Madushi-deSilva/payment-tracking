var express = require('express');
var app = express();
const nodemailer = require('nodemailer');
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

//view received due payment by id in email
app.get(('/receivedmail/due/:id'),(req, res) => {
    const receivedDue_ID = req.params.id;
    database.query(
        "SELECT c.email, r.amount FROM received_due_payments r INNER JOIN client c ON c.code = r.company_code WHERE receivedDue_ID = ?", [receivedDue_ID],
        (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send(result)
            }
    });
});

//view received overdue payment by id in email
app.get(('/receivedmail/overdue/:id'),(req, res) => {
    const receivedOverdue_ID = req.params.id;
    database.query(
        "SELECT c.email, r.amount FROM received_overdue_payments r INNER JOIN client c ON c.code = r.company_code WHERE receivedOverdue_ID = ?", [receivedOverdue_ID],
        (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send(result)
            }
    });
});

//email sending
app.post('/receivedmail', (req, res) => {

    let data = req.body
    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth: {
            user: 'mdsi.desilva@gmail.com',
            pass: 'mdsi123+*'
        }
    });

    let mailOptions = {
        from: data.from,
        to: data.to,
        subject: 'Regarding the Settled Payment',
        html: `

        <p>Dear Sir/ Madam,</p>
        <p>Thank you for settling the payment of Rs.${data.amount}. We highly appriciate your time and consideration.</p>
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

// SELECT c.company_name, d.invoice, d.amount, d.due_date, r.received_date FROM due_payment d JOIN received_due_payments r ON d.invoice=r.invoice JOIN client c ON c.code=d.company_code WHERE c.company_name = ?, [company_name];