const express = require('express');
const bodyParser =require('body-parser');

const Student = require('./models/Student');
const Contact = require('./models/Contact')
const app = express();

app.use(bodyParser.json());

// app.get('/', function(req,res){
//     res.send('hello world')
// });

//  Student.sync({ force: true })
 
// Contact.sync({ force: true })
//Student.drop();


app.listen(5000,()=>{
  console.log('server is running on port 3000');  
})