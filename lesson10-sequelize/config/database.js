const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('school', 'root', '', {
    host: 'localhost',
    dialect:'mysql' , //one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | oracle.
  });

  try {
     sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


module.exports=sequelize