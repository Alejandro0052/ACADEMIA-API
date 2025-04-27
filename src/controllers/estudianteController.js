
const { json } = require('sequelize');
const {Estudiante} = require('../models');

exports.getAllEstudiante = async (req, res) => {

    try{    
        const estudiantes = await Estudiante.findAll();
        res.json(estudiantes);
    }   catch (error){
        res.status(500).json({error: error.message});
    }

}


exports.createEstudiante = async (req, res) => {
  try {
    
    console.log('Datos recibidos:', req.body);
    
    const estudiante = await Estudiante.create({
      nombre: req.body.nombre,
      email: req.body.email,
      fecha_nacimiento: req.body.fecha_nacimiento
    });
    res.status(201).json(estudiante);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.getEstudianteById = async (req, res) => {
    try {
      const estudiante = await Estudiante.findByPk(req.params.id);
      if (!estudiante) {
        return res.status(404).json({ error: 'Estudiante no encontrado' });
      }
      res.json(estudiante);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.updateEstudiante = async (req, res) => {
    try {
      const [updated] = await Estudiante.update(req.body, {
        where: { id: req.params.id },
      });
      if (updated) {
        const updateEstudiantes = await Estudiante.findByPk(req.params.id);
        return res.json(updateEstudiantes);
      }
      throw new Error('Estudiante no encontrado');
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  exports.deleteEstudiante = async (req, res) => {
    try {
      const deleted = await Estudiante.destroy({
        where: { id: req.params.id },
      });
      if (deleted) {
        return res.json({ message: 'Estudiante eliminado' });
      }
      throw new Error('Estudiante no encontrado');
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };