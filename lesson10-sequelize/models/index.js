const sequelize = require('../config/database');

const Student = require('./Student');
const Contact = require('./Contact');

const db ={};

db.sequelize= sequelize;
db.Student =Student;
db.Contact= Contact;

module.exports = db;


