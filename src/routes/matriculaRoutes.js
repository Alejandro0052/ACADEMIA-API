const express = require('express');
const router = express.Router();
const matriculaController = require('../controllers/matriculaController');

router.get('/', matriculaController.getAllMatricula);
router.post('/', matriculaController.createMatricula);
router.get('/:id', matriculaController.getMatriculaById);
router.put('/:id', matriculaController.updateMatricula);
router.delete('/:id', matriculaController.deleteMatricula);

module.exports = router;