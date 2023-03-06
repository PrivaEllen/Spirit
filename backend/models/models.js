const sequelize = require("../database/database");
const HrUser = require("./hrUser");
const Token = require("./tokenModel");
const Tests = require("./Tests")

Token.belongsTo(HrUser, {foreignKey: 'id'})
HrUser.hasMany(Token, {foreignKey: 'id'})

Tests.belongsTo(HrUser, {foreignKey: 'id'})
HrUser.hasOne(Token, {foreignKey: 'id'})

module.exports = function (){
    sequelize.sync()
    .then(() => {
        console.log('Database started')
    })
    .catch(error => {
        console.log(error)
    })
}