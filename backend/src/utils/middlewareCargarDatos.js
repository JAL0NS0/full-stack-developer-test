const cargarDatosSesiones = require('./cargarSesiones');

const middlewareCargarDatos = async (req,res, next) => {
    await cargarDatos();
    next();
}; 

module.exports = middlewareCargarDatos;