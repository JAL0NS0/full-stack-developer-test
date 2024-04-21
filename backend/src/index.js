const express = require('express');
const app = express();
const middlewareCargarDatos = require('./utils/middlewareCargarDatos')


//Middlewares
app.use(middlewareCargarDatos)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use(require('./routes/index'));

app.listen(4000);
console.log('Servidor en puerto 4000');