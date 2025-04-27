const { Curso } = require('../models');

exports.getAllCurso = async (req, res) => {
  try {
    const cursos = await Curso.findAll();
    res.json(cursos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createCurso = async (req, res) => {
  try {
    const curso = await Curso.create(req.body);
    res.status(201).json(curso);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getCursoById = async (req, res) => {
  try {
    const curso = await Curso.findByPk(req.params.id);
    if (!curso) {
      return res.status(404).json({ error: 'Curso no encontrado' });
    }
    res.json(curso);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateCurso = async (req, res) => {
  try {
    const [updated] = await Curso.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedCurso = await Curso.findByPk(req.params.id);
      return res.json(updatedCurso);
    }
    throw new Error('Curso no encontrado');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteCurso = async (req, res) => {
  try {
    const deleted = await Curso.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      return res.json({ message: 'Curso eliminado' });
    }
    throw new Error('Curso no encontrado');
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};