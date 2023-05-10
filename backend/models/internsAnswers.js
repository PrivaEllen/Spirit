const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');

class internsAnswers extends Model {}
internsAnswers.init({
  internAnswerId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  text: {
    type: DataTypes.TEXT,
  },
  QuestionId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Questions',
      key: 'questionId'
    },
    onDelete: 'CASCADE'
  },
  idAnswer:{
    type: DataTypes.INTEGER,
    references: {
      model: 'Answers',
      key: 'answerId'
    },
    onDelete: 'CASCADE'
  },
  idIntern: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Interns',
      key: 'internId'
    },
    onDelete: 'CASCADE'
  }
}, {
  sequelize, 
  modelName: 'internsAnswers',
  timestamps: false,
  tableName: 'internsAnswers'
});

module.exports = internsAnswers