
const { json } = require('sequelize');
const {Matricula} = require('../models');

exports.getAllMatricula = async (req, res) => {

    try{    
        const matriculas = await Matricula.findAll();
        res.json(matriculas);
    }   catch (error){
        res.status(500).json({error: error.message});
    }

}


exports.createMatricula = async (req, res) => {

    try{    
        const matricula = Matricula.create(req.body);
        res.status(201).json(matricula);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }

}   


exports.getMatriculaById = async (req, res) => {
    try {
      const matricula = await Matricula.findByPk(req.params.id);
      if (!matricula) {
        return res.status(404).json({ error: 'Matricula no encontrada' });
      }
      res.json(matricula);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  exports.updateMatricula = async (req, res) => {
    try {
      const [updated] = await Matricula.update(req.body, {
        where: { id: req.params.id },
      });
      if (updated) {
        const updateMatricula = await Matricula.findByPk(req.params.id);
        return res.json(updateMatricula);
      }
      throw new Error('Matricula no encontrado');
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  exports.deleteMatricula = async (req, res) => {
    try {
      const deleted = await Matricula.destroy({
        where: { id: req.params.id },
      });
      if (deleted) {
        return res.json({ message: 'Matricula eliminado' });
      }
      throw new Error('Matricula no encontrado');
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };