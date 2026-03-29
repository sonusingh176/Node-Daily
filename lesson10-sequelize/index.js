const express = require('express');
const bodyParser =require('body-parser');
const db = require('./models');
const studentRoutes =require('./routes/studentRoutes')

const app = express();


db.sequelize.sync().then(()=>console.log("Tables create")).catch((err)=>console.log(err));


app.use(bodyParser.json());

// Set EJS as the view engine
app.set('view engine', 'ejs');

//Form data read karne ke liye.  Isse form ka data req.body me milta hai.
app.use(express.urlencoded({extended:true}));


app.use('/',studentRoutes)



app.listen(5000,()=>{
  console.log('server is running on port 3000');  
})