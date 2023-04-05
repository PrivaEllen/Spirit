const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');

class HrInterns extends Model {}
HrInterns.init({
  HrInternsId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  idHr: {
    type: DataTypes.INTEGER,
    references: {
      model: 'HrUser',
      key: 'id'
    },
    onDelete: 'CASCADE'
  },
  id_intern: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Interns',
      key: 'internId'
    },
    onDelete: 'CASCADE'
  }
}, {
  sequelize, 
  modelName: 'HrInterns',
  timestamps: false,
  tableName: 'HrInterns'
});

module.exports = HrInterns