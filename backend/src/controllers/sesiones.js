const {pool} = require('../database/db')


const getSesiones = async (req, res) =>{
    const response = await pool.query("SELECT id, nombre, start_datetime, end_datetime, cupo FROM sesiones;");
    res.json(response.rows);
};

const getSesionById = async (req, res) =>{
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM sesiones WHERE id=$1;', [id]);
    res.json(response.rows);
}

module.exports = {
    getSesiones,
    getSesionById
}