const {pool} = require('../database/db')


const getEstudiante = async (req, res) =>{
    const response = await pool.query('SELECT * FROM estudiantes;');
    res.json(response.rows);
};

const getEstudianteById = async (req, res) =>{
    const id = req.params.id;

    if(!Number.isInteger(id) ){
        return res.status(400).json({
            error: {
                message: "No se pudo encontrar estudiante",
                details: "Los datos requeridos no fueron proporcionado"
              }
        })
    }
    const response = await pool.query('SELECT * FROM estudiantes WHERE id=$1;', [id]);
    res.json(response.rows);
}

const createEstudiante = async (req, res) =>{
    const {nombre, email } = req.body;

    if(nombre===undefined || email===undefined){
        return res.status(400).json({
            error: {
                message: "No se puede guardar estudiante",
                details: "Los datos requeridos no fueron proporcionados"
              }
        })
    }

    const response = await pool.query('INSERT INTO estudiantes (nombre, email) VALUES ($1, $2);', [nombre, email]);
    res.json({
        message: "Usuario Creado",
        body: {
            nombre: nombre,
            email: email
        }
    })
}

const updateEstudiante = async (req, res) =>{
    const id = req.params.id;

    const {nombre, email} = req.body
    const response = await pool.query('UPDATE estudiantes SET nombre = $1, email=$2 WHERE id=$3;',[nombre,email,id]);
    res.json({
        message: `Estudiante ${id} actualizado`
    })
}

const deleteEstudiante = async (req, res) =>{
    const id = req.params.id;
    const response = await pool.query('DELETE FROM estudiantes WHERE id=$1;', [id]);
    res.json({
        message: `Estudiante ${id} eliminado`
    })
}


module.exports = {
    getEstudiante,
    getEstudianteById,
    createEstudiante,
    updateEstudiante,
    deleteEstudiante
}