const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');

class HrInterns extends Model {}
HrInterns.init({
  idHrInterns: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  id_intern: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Interns',
      key: 'internId'
    },
    onDelete: 'CASCADE',
    allowNull: true
  },
  id_hr: {
    type: DataTypes.INTEGER,
    references: {
      model: 'HrUser',
      key: 'id'
    },
    onDelete: 'CASCADE',
    allowNull: true
  },
}, {
  sequelize, 
  modelName: 'HrInterns',
  timestamps: false,
  tableName: 'HrInterns'
});

module.exports = HrInterns