const {pool} = require('../database/db')


const getAsignaciones = async (req, res) =>{
    const response = await pool.query('SELECT * FROM asignaciones;');
    res.json(response.rows);
};

const getAsignacionById = async (req, res) =>{
    const id_estudiante = req.params.id_estudiante;
    const id_sesion = req.params.id_sesion;
    const response = await pool.query('SELECT * FROM asignaciones WHERE id_estudiante=$1 AND id_sesion=$2;', [id_estudiante, id_sesion]);
    res.json(response.rows);
}

const createAsignancion = async (req, res) =>{
    const {id_estudiante, id_sesion } = req.body;
    const response = await pool.query('INSERT INTO asignaciones (id_estudiante, id_sesion) VALUES ($1, $2);', [id_estudiante, id_sesion]);
    res.json({
        message: "Asignacion Creada",
        body: {
            estudiante: id_estudiante,
            sesion: id_sesion
        }
    })
}

const updateAsignacion = async (req, res) =>{
    const id_estudiante = req.params.id_estudiante;
    const id_sesion = req.params.id_sesion;
    const {nombre, email} = req.body
    const response = await pool.query('UPDATE asignaciones SET id_estudiante = $1, id_sesion=$2 WHERE id_estudiante=$3 AND id_sesion=$4;',[nombre,email,id]);
    res.json({
        message: `Estudiante ${id} actualizado`
    })
}

const deleteAsignacion = async (req, res) =>{
    const id_estudiante = req.params.id_estudiante;
    const id_sesion = req.params.id_sesion;
    const response = await pool.query('DELETE FROM asignaciones WHERE id_estudiante=$1 AND id_sesion=$2;', [id_estudiante, id_sesion]);
    res.json({
        message: `Asignacion de estudiante id:${id_estudiante} a la sesion id:${id_sesion} eliminada`
    })
}


module.exports = {
    getAsignaciones,
    getAsignacionById,
    createAsignancion,
    updateAsignacion,
    deleteAsignacion
}