const db = require('../config/db');


const index  =(req,res)=>{

    const message = req.query.msg;

    db.query("SELECT * FROM student",(err,result)=>{

        if(err) throw err;

        res.render("students/index",{
            students:result,
            message:message
        });

    });

}

const create = (req,res)=>{
    res.render("students/create");
}

const store = (req,res)=>{
    const {name,email,mobile} = req.body;
    const sql="INSERT INTO student (name,email,mobile) VALUES (?,?,?)";

    db.query(sql,[name,email,mobile],function(error,result){
        if(error) throw error;
        console.log("record insert");
        //res.redirect("/students");
        res.redirect("/students?msg=Student added successfully");
    });
}

const edit =(req,res) =>{

    const id= req.params.id;

    db.query("SELECT * FROM student WHERE id=?",[id],(err,result)=>{
        if (err) throw err;
      
        res.render("students/edit",{student:result[0]});
    });

}

const update =(req,res)=>{
    const id= req.params.id;
    const {name,email,mobile}=req.body;

    const sql = "UPDATE student SET name=?, email=?, mobile=? WHERE id=?";

    db.query(sql,[name,email,mobile,id],(err,result)=>{
        if(err) throw err;
        res.redirect("/students");

    });
}

const destroy  = (req,res)=>{
    const id= req.params.id;
    
    db.query("DELETE FROM student WHERE id=?",[id],(err,result)=>{
        if(err) throw err;
        
        res.redirect("/students");
    });
}


module.exports={
    index,
    create,
    store,
    edit,
    update,
    destroy ,
};