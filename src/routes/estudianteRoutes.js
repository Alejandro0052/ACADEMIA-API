const express = require('express');
const router = express.Router();
const estudianteController = require('../controllers/estudianteController');

router.post('/', estudianteController.createEstudiante);
router.get('/', estudianteController.getAllEstudiante);
router.get('/:id', estudianteController.getEstudianteById);
router.put('/:id', estudianteController.updateEstudiante);
router.delete('/:id', estudianteController.deleteEstudiante);

module.exports = router;