const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize= require('../config/database');

class Contact extends Model {}

Contact.init(
  {
    // Model attributes are defined here
    student_id:{
        type:DataTypes.INTEGER
    },
    city:{
        type:DataTypes.STRING
    },
    address: {
      type: DataTypes.STRING,
    //  allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING,
      // allowNull defaults to true
    },
  },
  {
    sequelize, // We need to pass the connection instance
    modelName: 'Contact', // We need to choose the model name
    tableName: 'contacts', //optional 
    timestamps: true 
  },
);

// the defined model is the class itself
console.log(Contact === sequelize.models.Contact); // true

module.exports=Contact;