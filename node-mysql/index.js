
const express=require('express');
let app=express();


const studentRoutes = require('./routes/studentRoutes');

app.set("view engine","ejs");

//Form data read karne ke liye.  Isse form ka data req.body me milta hai.
app.use(express.urlencoded({extended:true}));

app.use("/", studentRoutes);

app.listen(3000,()=>{
    console.log("Server running on port 3000");
});

