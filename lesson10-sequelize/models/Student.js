const { Sequelize, DataTypes } = require('sequelize');
const sequelize= require('./config/datatable');

const Student = sequelize.define('Student',
    {
      id:{

      },
      name:{

      },
      roll_no:{

      },
      dob:{

      },
      email:{

      },
      mobile:{

      }

    },{
        tableName: "students",
        timestamps: false
    })

    module.exports = Student;