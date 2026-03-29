const { DataTypes, Model } = require('sequelize');
const sequelize= require('../config/database');


class Contact extends Model {}

Contact.init(
  {
    student_id: DataTypes.INTEGER,
    city: DataTypes.STRING,
    address: DataTypes.STRING,
    mobile: DataTypes.STRING,
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Contact', // We need to choose the model name
  },
);

// the defined model is the class itself
console.log(Contact === sequelize.models.Contact); // true

module.exports=Contact;