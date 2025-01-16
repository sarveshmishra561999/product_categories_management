// require("dotenv/config")
const { Sequelize } = require('sequelize');
const mysql = require('mysql2');

const DB_NAME =process.env.DB_NAME;
const USER ='root';
const PASSWORD = process.env.PASSWORD;
const HOST = process.env.HOST;

const connection = mysql.createConnection({
    host: HOST,
    user: USER,
    password: PASSWORD,
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }

    connection.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`, (err) => {
        if (err) {
            console.error('Error creating database:', err);
        } else {
            console.log(`Database ${DB_NAME} is ready or already exists.`);
        }
        connection.end(); 
    });
});

const sequelize = new Sequelize(DB_NAME, USER, PASSWORD, {
    host: HOST,
    dialect: 'mysql',
    logging: false, 
});

module.exports = sequelize;
