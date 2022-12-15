const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = process.env.port || 8080

const authRoute = require('./routes/auth-route');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.connect('mongodb://127.0.0.1:27017/shopapp', (err)=>{
    if(err){
        console.log("Database is Not Connected !")
    }else {
        console.log("DB is Connected.......")
    }
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(cors())
app.use('/auth', authRoute);

app.get('/', (req, res) => {
    res.send("Welcome to Minh Dev Server");
})

app.listen(port, ()=>{
    console.log("Node server is connected:",port);
})