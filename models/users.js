const { Sequelize, DataTypes } = require('sequelize');
const sequelizeOp = require('../datasources/mySql');

const User = sequelizeOp.sequelize.define('User', {
  // Model attributes are defined here
  user_id: { 
     type:Sequelize.INTEGER, 
     autoIncrement:true, 
     allowNull:false, 
     primaryKey:true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  // Other model options go here
});

module.exports = User