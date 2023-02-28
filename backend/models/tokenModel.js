const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');

class Token extends Model {}
Token.init({
  user: {
    type: DataTypes.INTEGER,
    references: {
      model: 'HrUser',
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  RefreshToken: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize, 
  modelName: 'Token',
  timestamps: false,
  tableName: 'Token'
});

module.exports = Token