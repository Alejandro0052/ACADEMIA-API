const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Curso = sequelize.define('Curso', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  duracion_horas: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'cursos',
  timestamps: false,
});

module.exports = Curso;