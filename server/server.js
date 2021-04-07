var mysql = require('mysql2');
const express = require('express');
//var url = require('url');
var app=express()
var cors=require('cors')
const port=3002


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "localhost"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(cors())
app.get('/dashboard',(req,res)=>{
 
   console.log(res.json())
  
});
    app.listen(port,()=>{
    console.log(`server started http://localhost:${port}`);
    });
