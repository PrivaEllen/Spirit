const sequelize = require("../database/database");
const HrUser = require("./hrUser");
const Token = require("./tokenModel");
const Tests = require("./Tests");
const Questions = require("./Questions");
const Answers = require("./Answers");
const internsAnswers = require("./internsAnswers");
const Interns = require("./Interns");
const Sections = require("./Sections");
const HrInterns = require("./HrandInterns");

Token.belongsTo(HrUser, {foreignKey: 'id'})
HrUser.hasOne(Token, {foreignKey: 'id'})

Tests.belongsTo(HrUser, {foreignKey: 'idCreator'})
HrUser.hasMany(Tests, {foreignKey: 'idCreator'})

Sections.belongsTo(Tests, {foreignKey: 'id_test'})
Tests.hasMany(Sections, {foreignKey: 'id_test'})

Questions.belongsTo(Sections, {foreignKey: 'idSection'})
Sections.hasMany(Questions, {foreignKey: 'idSection'})

Answers.belongsTo(Questions, {foreignKey: 'idQuestion'})
Questions.hasMany(Answers, {foreignKey: 'idQuestion'})

internsAnswers.belongsTo(Questions, {foreignKey: 'QuestionId'})
Questions.hasMany(internsAnswers, {foreignKey: 'QuestionId'})

internsAnswers.belongsTo(Answers, {foreignKey: 'idAnswer'})
Answers.hasOne(internsAnswers, {foreignKey: 'idAnswer'})

internsAnswers.belongsTo(Interns, {foreignKey: 'idIntern'})
Interns.hasMany(internsAnswers, {foreignKey: 'idIntern'})

Interns.belongsTo(HrUser, {foreignKey: 'idHr'})
HrUser.hasMany(Interns, {foreignKey: 'idHr'})

Interns.belongsToMany(HrUser, {through: HrInterns})
HrUser.belongsToMany(Interns, {through: HrInterns})

module.exports = function (){
    sequelize.sync()
    .then(() => {
        console.log('Database started')
    })
    .catch(error => {
        console.log(error)
    })
}