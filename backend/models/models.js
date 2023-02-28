const sequelize = require("../database/database");
const HrUser = require("./hrUser");
const Token = require("./tokenModel");

Token.belongsTo(HrUser, {foreignKey: 'id'})
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