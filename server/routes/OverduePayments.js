var express = require('express');
var app = express();
const nodemailer = require('nodemailer');
var database = require('../config/database');

//get all overdue payments
app.get(('/alloverdue'),(req, res) => {
    database.query(
        "SELECT o.overdue_ID, c.company_name, o.invoice, c.tel_no, c.email, o.amount, o.collected_status FROM overdue_payment o INNER JOIN client c ON c.code = o.company_code ORDER BY o.overdue_ID ASC",
        (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send(result)
            }
    });
});

    //get all overdue payments that should settle today to home page
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

//get all overdue payments that should settle today to credit collector page
app.get(('/credit/alloverdue'),(req, res) => {
    database.query(
        "SELECT o.overdue_ID, o.invoice, c.company_name, c.address, c.tel_no, c.contact_person, c.mobile_no, o.amount, o.credit_collected_status FROM overdue_payment o INNER JOIN client c ON c.code = o.company_code WHERE o.due_date = CURDATE() AND o.reply_status = 'Replied' ORDER BY o.overdue_ID ASC",
        (err, result) => {
            if(err){
                console.log(err)
            }else{
                res.send(result)
            }
    });
});

//update overdue payment details according to credit collector
app.put(('/credit/update/:id'), (req, res) => {
    const overdue_ID = req.params.id;
    let sql = `UPDATE overdue_payment SET credit_collected_status = ? WHERE overdue_ID = ?`;
    database.query(sql, [1, overdue_ID], (err, result) => {
            if(err){
                console.log(err)
            }else{
                //insert collected payment to received  overdue payments table
                database.query(
                    'INSERT IGNORE INTO received_overdue_payments (company_code, invoice, amount, overdue_ID) SELECT company_code, invoice, amount, overdue_ID FROM overdue_payment o WHERE o.due_date = CURDATE() AND o.credit_collected_status = "1"',(err, result) => {
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
    const due_date = req.body.due_date;
    const reply_status = req.body.reply_status;
    // const collected_status = req.body.collected_status;
    const note = req.body.note;

    database.query(
        'UPDATE overdue_payment SET due_date = ?, reply_status = ?, note = ? WHERE overdue_ID = ?', 
        [due_date, reply_status, note, overdue_ID], (err, result) => {
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

//email sending
app.post('/overduemail', (req, res) => {

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
        subject: 'Regarding the Overdue Payment',
        html: `

        <p>Dear Sir/ Madam,</p>
        <p>You have an overdue payment of Rs.${data.amount} which was due on ${data.duedate}. Please consider about this matter and settle the payment as soon as possible. We are expecting a response within today.</p>
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
