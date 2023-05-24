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
  QuestionText: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  QuestionType:{
    type: DataTypes.ENUM,
    values: ['oneOfList', 'severalOfList', 'text'],
    allowNull: false,
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
  },
  idTest:{
    type: DataTypes.INTEGER,
    references: {
      model: 'Tests',
      key: 'testId'
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