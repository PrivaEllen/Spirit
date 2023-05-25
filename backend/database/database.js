const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('Spirit', 'postgres', '123', {
    host: 'localhost',
    dialect: 'postgres'
});
console.log(sequelize)

module.exports = sequelize

