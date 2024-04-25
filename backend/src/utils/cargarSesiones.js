const {leerJSON} = require('./leerJSON');
const {pool} = require('../database/db')
require('dotenv').config()

const cargarDatos = async (req, res, next)=>{
    const sesiones = leerJSON(process.env.sesiones_path);
    if(!sesiones )return; 

    try {
        insertar(sesiones)
    } catch (error) {
        console.log('Error')
    }
}

const insertar = async (sesiones)=>{
    //Eliminar sesiones antiguas
    const response = await pool.query('DELETE FROM sesiones;');

    //Cargar sesiones nuevas
    console.log('Cargando Sesiones...')
    for(const nombreCurso in sesiones.sesiones){
        const sesionesCurso = sesiones.sesiones[nombreCurso];
        for (const sesion of sesionesCurso){
            sesion.fecha_inicio = sesion.fecha_inicio.replaceAll("/","-")+":00";
            sesion.fecha_fin = sesion.fecha_fin.replaceAll("/","-")+":00";
            const response = await pool.query('INSERT INTO sesiones (nombre, start_datetime, end_datetime, cupo, disponible) VALUES ($1, $2, $3, $4, $5);', [nombreCurso, sesion.fecha_inicio, sesion.fecha_fin, sesion.cupo, sesion.cupo]);
            console.log(nombreCurso + ' inicia: '+ sesion.fecha_inicio +' termina: '+ sesion.fecha_fin+ ' y es para ' + sesion.cupo + ' personas.')
        }
    }
}

cargarDatos();