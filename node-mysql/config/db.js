let mysql = require("mysql");

var db= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"school"
    
});

db.connect((err)=>{
    if(err) throw err;
    console.log("Database Connected");
})

module.exports=db;