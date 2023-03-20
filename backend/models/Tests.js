const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');

class Tests extends Model {}
Tests.init({
  testId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT
  },
  idCreator: {
    type: DataTypes.INTEGER,
    references: {
      model: 'HrUser',
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  type: {
    type: DataTypes.ENUM,
    values: ['public', 'private'],
    allowNull: false,
  },
  countSections: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
}, {
  sequelize, 
  modelName: 'Tests',
  timestamps: false,
  tableName: 'Tests'
});

module.exports = Tests