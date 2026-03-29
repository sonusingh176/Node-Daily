const { Student, sequelize } = require("../models");

//  List show
const index = async (req, res) => {
    try {
        const students = await Student.findAll({
            attributes: ['id', 'name', 'email','mobile','roll_no','dob'],
        });

       // console.log(JSON.stringify(students, null, 2));

        const message = req.query.msg;

        res.render("students/index", { students, message });
    } catch (err) {
        console.log(err);
        res.send("Error fetching data");
    }
};



//  Form show
const create = (req, res) => {
    res.render("students/create");
};


//  Insert
const store = async (req, res) => {

    try {
        const data=req.body;

        const savestudent=await Student.create(data)

        res.redirect("/students?msg=Student added successfully");
   
    } catch (error) {
        console.log(error);
            res.send("Error inserting data");
    }

};

//  Edit form
const edit = async (req, res) => {
    try {
        const student = await Student.findByPk(req.params.id);

        res.render("students/edit", { student });
    } catch (err) {
        console.log(err);
        res.send("Error fetching student");
    }
};

//  Update
const update = async (req, res) => {
    try {
        const { name, email, mobile ,roll_no, dob} = req.body;

        await Student.update(
            { name, email, mobile, roll_no, dob},
            { where: { id: req.params.id } }
        );

        res.redirect("/students?msg=Student updated successfully");
    } catch (err) {
        console.log(err);
        res.send("Error updating data");
    }
};

// 6️ Delete
const destroy = async (req, res) => {
  
    try {
     
    await Student.destroy({
            where: { id:2 }
        });

        // const id=  Number(req.params.id);
        // await sequelize.query(
        //     "DELETE FROM students WHERE id = ?",
        //     {
        //         replacements: [id],
        //     }
        // );

        res.redirect("/students?msg=Student deleted successfully");
    } catch (err) {
        console.log(err);
        res.send("Error deleting data");
    }
};

module.exports = {
    index,
    create,
    store,
    edit,
    update,
    destroy,
};