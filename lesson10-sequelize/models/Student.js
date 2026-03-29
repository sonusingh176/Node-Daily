const { DataTypes } = require('sequelize');
const sequelize= require('../config/database');

const Student = sequelize.define(
   'Student',
    {
      // id:{
      //   type: DataTypes.INTEGER,
      //   autoIncrement: true,
      //   primaryKey: true,
      // },
      name:{
        type: DataTypes.STRING,
        allowNull: false,

      },
      email:{
        type: DataTypes.STRING,
      },
      mobile:{
        type: DataTypes.STRING,
      },
      roll_no:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      dob:{
        type: DataTypes.DATEONLY,
      },
     

    },
    
    {
        tableName: "students",
        timestamps: true
    })

    // `sequelize.define` also returns the model
console.log(Student === sequelize.models.Student); //TRUE
    module.exports = Student;