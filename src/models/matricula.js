const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Matricula = sequelize.define('Matricula', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  estudianteId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  cursoId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  fecha_matricula: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'matriculas',
  timestamps: false,
});

module.exports = Matricula;