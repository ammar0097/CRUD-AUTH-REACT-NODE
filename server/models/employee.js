const Sequelize = require('sequelize');
const sequelize = require("../util/database");

const Employee = sequelize.define('employee',{
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    name : Sequelize.STRING,
    age : Sequelize.DOUBLE,
    country : Sequelize.STRING,
    position : Sequelize.STRING,
    wage : Sequelize.DOUBLE
});

module.exports = Employee;