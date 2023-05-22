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
const Types = require("./TypesOfTests");

Token.belongsTo(HrUser, {foreignKey: 'id'})
HrUser.hasOne(Token, {foreignKey: 'id'})

Tests.belongsTo(HrUser, {foreignKey: 'idCreator'})
HrUser.hasMany(Tests, {foreignKey: 'idCreator'})

Tests.belongsTo(Types, {foreignKey: 'type'})
Types.hasMany(Tests, {foreignKey: 'type'})

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

Interns.belongsToMany(HrUser, {through: 'HrInterns', foreignKey: 'id_intern'})
HrUser.belongsToMany(Interns, {through: 'HrInterns', foreignKey: 'id_hr'})

module.exports = function (){
    sequelize.sync()
    .then(() => {
        console.log('Database started')
    })
    .catch(error => {
        console.log(error)
    })
}