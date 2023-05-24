const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('Spirit', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres'
});
console.log(sequelize)

module.exports = sequelize

