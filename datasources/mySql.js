const mysql = require('mysql2');
require('dotenv').config();
const { Sequelize } = require('sequelize')
const sqlConnection = mysql.createConnection({
    host: process.env.SQL_HOST,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE,
});

const sequelize = new Sequelize(process.env.SQL_DATABASE, process.env.SQL_USER, process.env.SQL_PASSWORD, {
    host: process.env.SQL_HOST,
    dialect: 'mysql'
})

module.exports = {
    sqlConnection, 
    sequelize,
}

