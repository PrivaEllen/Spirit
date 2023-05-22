const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('Spirit', 'postgres', '12126', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize

