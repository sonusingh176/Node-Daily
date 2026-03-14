const express = require('express');
const app = express();
const port = 5000;


app.get('/test',(req,res)=>{
    res.send('hello test');
});

app.listen(port, ()=>{

    console.log("server is running")

})