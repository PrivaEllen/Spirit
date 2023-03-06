const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');

class Tests extends Model {}
Tests.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    //unique: true
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
  idInterns: {
    type: DataTypes.ARRAY(DataTypes.INTEGER),
  }
}, {
  sequelize, 
  modelName: 'Tests',
  timestamps: false,
  tableName: 'Tests'
});

module.exports = Tests