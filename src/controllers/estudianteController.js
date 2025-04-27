
const { json } = require('sequelize');
const {Estudiante} = require('../models');

exports.getAllEstudiantes = async (req, res) => {

    try{    
        const estudiantes = await Estudiante.findAll();
        res.json(estudiantes);
    }   catch (error){
        res.status(500).json({error: error.message});
    }

}


exports.createEstudiantes = async (req, res) => {

    try{    
        const estudiante = Estudiante.create(req.body);
        res.status(201).json(curso);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }

}   


exports.getEstudianteById = async (req, res) => {
    try {
      const estudiante = await Estudiante.findByPk(req.params.id);
      if (!estudiante) {
        return res.status(404).json({ error: 'Curso no encontrado' });
      }
      res.json(estudiante);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.updateEstudiantes = async (req, res) => {
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
      const deleted = await Matricula.destroy({
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