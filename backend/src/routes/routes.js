const { Router } = require('express');
const router = Router();

//Controllers
const Estudiantes = require('../controllers/estudiantes');
const Sesiones = require('../controllers/sesiones');
const Asignaciones = require('../controllers/asignaciones');

//Estudiantes CRUD
router.get('/estudiantes', Estudiantes.getEstudiante);
router.post('/estudiantes', Estudiantes.createEstudiante);
router.get('/estudiantes/:id', Estudiantes.getEstudianteById);
router.delete('/estudiantes/:id', Estudiantes.deleteEstudiante);
router.put('/estudiantes/:id', Estudiantes.updateEstudiante);

//Sesiones
router.get('/sesiones', Sesiones.getSesiones);
router.get('/sesiones/:id', Sesiones.getSesionById)

//Asignaciones
router.get('/asignaciones', Asignaciones.getAsignaciones);
router.post('/asignaciones', Asignaciones.createAsignancion);
router.get('/asignaciones/:id_estudiante/:id_sesion', Asignaciones.getAsignacionById);
router.delete('/asignaciones/:id_estudiante/:id_sesion', Asignaciones.deleteAsignacion);
router.put('/asignaciones/:id_estudiante/:id_sesion', Asignaciones.updateAsignacion);
module.exports = router;