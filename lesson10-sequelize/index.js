const express = require('express');
const bodyParser =require('body-parser');
const db = require('./config/database');
const app = express();

app.use(bodyParser.json());

app.get('/', function(req,res){
    res.send('hello world')
});



app.listen(3000,()=>{
  console.log('server is running on port 3000');  
})