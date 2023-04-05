const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');

class HrUser extends Model {}
HrUser.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  Name: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  Surname: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  Photo: {
    type: DataTypes.TEXT,
    defaultValue: 'defaultIcon.png'
  },
  isActivated: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
  activationLink: {
    type: DataTypes.STRING(255)
  },
  company: {
    type: DataTypes.STRING(100),
    allowNull: true
  },
  phone: {
    type: DataTypes.STRING(15),
    allowNull: true
  },
  emailForFeedback: {
    type: DataTypes.STRING(255),
  }
}, {
  sequelize, 
  modelName: 'HrUser',
  timestamps: false,
  tableName: 'HrUser'
});

module.exports = HrUser