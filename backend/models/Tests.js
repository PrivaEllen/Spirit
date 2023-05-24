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
  idCreator: {
    type: DataTypes.INTEGER,
    references: {
      model: 'HrUser',
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  type: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  dateOfCreate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  img: {
    type: DataTypes.TEXT,
    defaultValue: 'defaultPat.png'
  }
}, {
  sequelize, 
  modelName: 'Tests',
  timestamps: false,
  tableName: 'Tests'
});

module.exports = Tests