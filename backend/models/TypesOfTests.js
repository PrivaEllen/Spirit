const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');

class Types extends Model {}
Types.init({
  typeId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  }
}, {
  sequelize, 
  modelName: 'Types',
  timestamps: false,
  tableName: 'Types'
});

module.exports = Types