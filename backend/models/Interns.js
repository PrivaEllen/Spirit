const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');

class Interns extends Model {}
Interns.init({
  internId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },
  Name: {
    type: DataTypes.STRING(30),
  },
  Surname: {
    type: DataTypes.STRING(50),
  },
}, {
  sequelize, 
  modelName: 'Interns',
  timestamps: false,
  tableName: 'Interns'
});

module.exports = Interns