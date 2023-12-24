const Squelize = require('sequelize');

const sequelize = new Squelize('appointment', 'root', 'rbsingh@123', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;