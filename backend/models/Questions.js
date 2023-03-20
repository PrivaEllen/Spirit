const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/database');

class Questions extends Model {}
Questions.init({
  questionId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  questionText: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  idSection: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Sections',
      key: 'sectionId'
    },
    onDelete: 'CASCADE'
  },
  type: {
    type: DataTypes.ENUM,
    values: ['oneOfList', 'severalOfList', 'text'],
    allowNull: false,
  },
  obligatory: {
    type: DataTypes.BOOLEAN,
    defaultValue: false  
  }
}, {
  sequelize, 
  modelName: 'Questions',
  timestamps: false,
  tableName: 'Questions'
});

module.exports = Questions