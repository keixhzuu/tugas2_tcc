const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Notes = sequelize.define('Notes', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
  }
}, {
  tableName: 'notes',
  timestamps: true,
});

module.exports = Notes; 