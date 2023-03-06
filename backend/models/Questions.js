const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');

class Questions extends Model {}
Questions.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  questionText: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  idTest: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Tests',
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  type: {
    type: DataTypes.ENUM,
    values: ['oneOfList', 'severalOfList', 'Text'],
    allowNull: false,
  }
}, {
  sequelize, 
  modelName: 'Questions',
  timestamps: false,
  tableName: 'Questions'
});

module.exports = Questions