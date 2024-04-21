const {leerJSON} = require('./leerJSON');
const {pool} = require('../database/db')

const insertar = async (sesiones)=>{
    const response = await pool.query('DELETE FROM sesiones;');

    for(const nombreCurso in sesiones.sesiones){
        const sesionesCurso = sesiones.sesiones[nombreCurso];
        for (const sesion of sesionesCurso){
            const response = await pool.query('INSERT INTO sesiones (nombre, start_datetime, end_datetime, cupo) VALUES ($1, $2, $3, $4);', [nombreCurso, sesion.fecha_inicio, sesion.fecha_fin, sesion.cupo]);
            console.log(nombreCurso + ' inicia: '+ sesion.fecha_inicio +' termina: '+ sesion.fecha_fin+ ' y es para:' + sesion.cupo + 'personas.')
        }
    }
}

const cargarDatos = async (req, res, next)=>{
    const sesiones = leerJSON();
    if(!sesiones )return;

    try {
        insertar(sesiones)
    } catch (error) {
        console.log('Error')
    }
}

cargarDatos();