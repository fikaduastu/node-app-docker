const express = require('express');
const app = express();
const port = process.env.port || 5000;

app.get('/',(req,res)=>{
    res.send("<h1> This is Homepage</h1>");
});

app.listen(port,()=>{
    console.log(`the app is running on port ${port}`);
});