const express = require('express');
const bodyParser =require('body-parser');

const app = express();



const db = require('./models');

db.sequelize.sync().then(()=>console.log("Tables create")).catch((err)=>console.log(err));


app.use(bodyParser.json());



// app.get('/', function(req,res){
//     res.send('hello world')
// });





app.listen(5000,()=>{
  console.log('server is running on port 3000');  
})