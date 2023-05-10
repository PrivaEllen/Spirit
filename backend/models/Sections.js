const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');

class Sections extends Model {}
Sections.init({
  sectionId: {
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
  id_test: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Tests',
      key: 'testId'
    },
    onDelete: 'CASCADE'
  }
}, {
  sequelize, 
  modelName: 'Sections',
  timestamps: false,
  tableName: 'Sections'
});

module.exports = Sections