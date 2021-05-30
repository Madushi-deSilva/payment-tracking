const express =  require('express');
const app = express();
const mysql = require('mysql');
const cors =  require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'cricket49',
    database: 'tracker',
});

app.post(('/create'), (req, res) => {
    const job_role = req.body.job_role;
    const name = req.body.name;
    const username = req.body.username;
    const password = req.body.password;
    const conPassword = req.body.conPassword;
    const conNo = req.body.conNo;
    const email = req.body.email;

    if(job_role === 'Account Officer'){
        db.query('INSERT INTO account_officer (job_role, name, username, password, confirm_password, contact_no, email) VALUES (?, ?, ?, ?, ?, ?, ?)', 
            [job_role, name, username, password, conPassword, conNo, email], (err, result) => {
                if(err){
                    console.log(err)
                }else{
                    res.send("values inserted")
                }
            }
        );
    }else{
        db.query('INSERT INTO credit_collector (job_role, name, username, password, confirm_password, contact_no, email) VALUES (?, ?, ?, ?, ?, ?, ?)', 
            [job_role, name, username, password, conPassword, conNo, email], (err, result) => {
                if(err){
                    console.log(err)
                }else{
                    res.send("values inserted")
                }
            }
        );
    }

});


app.listen(3001, () => {
    console.log("Server is running on port 3001");
});