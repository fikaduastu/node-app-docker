const express = require('express');
const conn = require('./db-connection');
const path = require('path');
const app = express();
const dotenv = require('dotenv');

dotenv.config({path:'./.env'});
const port = process.env.PORT || 5000;

conn.db.connect((error)=>{
    if (error){
    console.log(error);
    }
    else{
       console.log("conneted success");
    }
});

const publicDirectory = path.join(__dirname,'./public');
app.use(express.static(publicDirectory));
app.set('view engine','hbs');
app.get('/',(req,res)=>{
    res.render('index');
});

app.listen(port,()=>{
    console.log(`the app is running on port ${port}`);
});