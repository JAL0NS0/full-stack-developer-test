const express = require('express');
const app = express();
//require('./utils/CargarSesiones')


//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use(require('./routes/routes'));

app.listen(4000);
console.log('Servidor en puerto 4000');