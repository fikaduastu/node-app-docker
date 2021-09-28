const express = require('express');
const conn = require('./db-connection');
const app = express();

const port = process.env.port || 5000;

conn.db.connect((error)=>{
    if (error){
    console.log(error);
    }
    else{
       console.log("conneted success");
    }
});
app.get('/',(req,res)=>{
    res.send("<h1> This is Homepage</h1>");
});

app.listen(port,()=>{
    console.log(`the app is running on port ${port}`);
});