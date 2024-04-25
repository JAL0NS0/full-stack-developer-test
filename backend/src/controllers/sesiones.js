const {pool} = require('../database/db')


const getSesiones = async (req, res) =>{
    const response = await pool.query("SELECT * FROM sesiones;");
    res.json(response.rows);
};

const getSesionById = async (req, res) =>{
    const id = req.params.id;
    const response = await pool.query('SELECT * FROM sesiones WHERE id=$1;', [id]);
    if(response.rowCount ==1 ){
        res.json(response.rows[0]);
    }else{
        res.status(404).json({});
    }
}

module.exports = {
    getSesiones,
    getSesionById
}