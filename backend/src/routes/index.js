const { Router } = require('express');
const router = Router();

//Controllers
const Estudiantes = require('../controllers/estudiantes');
const Sesiones = require('../controllers/sesiones');
const Asignaciones = require('../controllers/asignaciones');

router.get('/estudiantes', Estudiantes.getEstudiante);
router.post('/estudiantes', Estudiantes.createEstudiante);
router.get('/estudiantes/:id', Estudiantes.getEstudianteById);
router.delete('/estudiantes/:id', Estudiantes.deleteEstudiante);
router.put('/estudiantes/:id', Estudiantes.updateEstudiante);

module.exports = router;