const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');

class Answers extends Model {}
Answers.init({
  answerId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  correctness: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  idQuestion: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Questions',
      key: 'questionId'
    },
    onDelete: 'CASCADE'
  }
}, {
  sequelize, 
  modelName: 'Answers',
  timestamps: false,
  tableName: 'Answers'
});

module.exports = Answers