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
    type: DataTypes.TEXT,
    allowNull: true
  },
  idCreator: {
    type: DataTypes.INTEGER,
    references: {
      model: 'HrUser',
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  category: {
    type: DataTypes.ENUM,
    values: ['template', 'user'],
    allowNull: false,
    defaultValue: 'user'
  },
  private: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  type: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Types',
      key: 'typeId'
    },
    onDelete: 'CASCADE',
    allowNull: true
  },
  dateOfCreate: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: DataTypes.NOW
  },
  countSections: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
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