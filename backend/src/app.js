const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

//Middlewares
app.use(morgan('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Cargar las sesiones a la base de datos
require('./utils/cargarSesiones')

//Routes
app.use(require('./routes/routes'));

module.exports = app;