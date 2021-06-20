const express =  require('express');
const bodyParser = require('body-parser');
const app = express();
var database = require('./config/database');
const cors =  require('cors');
var port =  process.env.PORT || 3001;

//This is to allow our api for cross-origin resource sharing
app.use(cors());

app.use(bodyParser.urlencoded({extended: true}))

//This is to allow our api for parsing json
app.use(express.json());

//connect to our database
database.connect((err) => {
    if(err) throw err;
});

//Signup routes in the main index.js
app.use('/signup', [
    require('./routes/Signup')
]);

//Client routes in the main index.js
app.use('/clients', [
    require('./routes/Client')
]);

//Due Payments routes in the main index.js
app.use('/duepayments', [
    require('./routes/DuePayments')
]);

//Overdue Payments routes in the main index.js
app.use('/overduepayments', [
    require('./routes/OverduePayments')
]);


app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});