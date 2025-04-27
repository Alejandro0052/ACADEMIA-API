const sequelize = require('../config/db');
const Curso = require('./curso');
const Estudiante = require('./estudiante');
const Matricula = require('./matricula');

// Relaciones
Estudiante.belongsToMany(Curso, {
  through: Matricula,
  foreignKey: 'estudianteId',
  otherKey: 'cursoId',
});

Curso.belongsToMany(Estudiante, {
  through: Matricula,
  foreignKey: 'cursoId',
  otherKey: 'estudianteId',
});

// Sincronizar modelos con la base de datos
(async () => {
  try {
    await sequelize.sync({ force: false });
    console.log('Modelos sincronizados correctamente');
  } catch (error) {
    console.error('Error al sincronizar modelos:', error);
  }
})();

module.exports = {
  Curso,
  Estudiante,
  Matricula,
};