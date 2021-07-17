var express = require('express');
var app = express();
var database = require('../config/database');

//insert user details to the database
app.post(('/create'), (req, res) => {
    const job_role = req.body.job_role;
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    const conNo = req.body.conNo;
    const email = req.body.email;

    if(job_role === 'Account Officer'){
        database.query('INSERT INTO account_officer (job_role, name, username, password, contact_no, email) VALUES (?, ?, ?, ?, ?, ?)', 
            [job_role, name, username, password, conNo, email], (err, result) => {
                if(err){
                    console.log(err)
                }else{
                    res.send("values inserted")
                }
            }
        );
    }else{
        database.query('INSERT INTO credit_collector (job_role, name, username, password, contact_no, email) VALUES (?, ?, ?, ?, ?, ?)', 
            [job_role, name, username, password, conNo, email], (err, result) => {
                if(err){
                    console.log(err)
                }else{
                    res.send("values inserted")
                }
            }
        );
    }

});

// select login credentials from the database
app.post('/login', (req, res) => {
    const job_role = req.body.job_role;
    const username = req.body.username;
    const password = req.body.password;

    if(job_role === 'Account Officer'){
        database.query("SELECT accountOfficer_userID, username, password, job_role FROM account_officer WHERE username = ? AND password = ? AND job_role = 'Account Officer'", 
            [username, password, job_role], (err, result) => {
                if(err){
                    res.send({err: err})
                }

                if (result){
                    res.send(result)
                }else{
                    res.send({message: "No user found"})
                }    
            }
        );
    }else{
        database.query("SELECT creditCollector_userID, username, password, job_role FROM credit_collector WHERE username = ? AND password = ? AND job_role = 'Credit Collector'", 
            [username, password, job_role], (err, result) => {
                if(err){
                    res.send({err: err})
                }
                
                if (result){
                    res.send(result)
                }else{
                    res.send({message: "No user found"})
                }    
            }
        );
    }
});

//find user by id
app.get(('/:id'),(req, res) => {
    const id = req.params.id
    const job_role = req.body.job_role;
    if(job_role === 'Account Officer'){
        database.query(
            "SELECT * FROM account_officer WHERE accountOfficer_userID = ? AND  job_role ='Account Officer'" [id, job_role], 
            (err, result) => {
                if(err){
                    console.log(err)
                }else{
                    res.send(result)
                }  
            } 
        );
    }else{
        database.query(
            "SELECT * FROM credit_collector WHERE creditCollector_userID = ? AND job_role = 'Credit Collector'" [id, job_role], 
            (err, result) => {
                if(err){
                    console.log(err)
                }else{
                    res.send(result)
                }  
            } 
        );
    }
});
// edit user data and update the database
app.put(('/update/:id'), (req, res) => {
    const id = req.body.id
    const job_role = req.body.job_role;
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    const conNo = req.body.conNo;
    const email = req.body.email;
    if(job_role === 'Account Officer'){
        database.query("UPDATE account_officer SET name = ?, username = ?, password = ?, contact_no = ?, email = ?   WHERE accountOfficer_userID = ? AND job_role = 'Account Officer'", 
            [name, username,password, conNo, email, id, job_role], (err, result) => {
                if(err){
                    res.send(err);
                }else{
                    res.send("values updated");
                }    
            }
        );
    }else{
        database.query("UPDATE credit_collector SET name = ?, username = ?, password = ?, contact_no = ?, email = ? WHERE creditCollector_userID = ? AND job_role = 'Credit Collector'", 
            [name, username,password, conNo, email, id, job_role], (err, result) => {
                if(err){
                    res.send(err);
                }else{
                    res.send("values updated");
                }     
            }
        );
    }
});

module.exports = app;
