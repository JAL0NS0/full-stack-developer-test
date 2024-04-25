const {pool} = require('../database/db')

//GET TODAS LAS ASIGNACIONES
const getAsignaciones = async (req, res) =>{
    const response = await pool.query('SELECT * FROM asignaciones;');
    return res.json(response.rows);
};

//GET ASIGNACION BY ID
const getAsignacionById = async (req, res) =>{
    const id_estudiante = req.params.id_estudiante
    const id_sesion = req.params.id_sesion
    //Sin datos
    if(!Number.isInteger(id_estudiante)  || !Number.isInteger(id_sesion)){
        return res.status(400).json({
            error: {
                message: "No se pudo encontrar asignación",
                details: "Los datos requeridos no fueron proporcionado"
              }
        })
    }
    const response = await pool.query('SELECT * FROM asignaciones WHERE id_estudiante=$1 AND id_sesion=$2;', [id_estudiante, id_sesion]);
    res.json(response.rows);
}

//CREAR ASIGANACION
const createAsignancion = async (req, res) =>{
    const {id_estudiante, id_sesion } = req.body;

    //Sin datos
    if(id_estudiante===undefined || id_sesion===undefined){
        return res.status(400).json({
            error: {
                message: "No se puede crear la asignación",
                details: "Los datos requeridos no fueron proporcionados en el cuerpo de la solicitud"
              }
        })
    }
    //Datos incorrectos
    //Existe Estudiante
    const existe_estudiante = await pool.query('SELECT * FROM estudiantes WHERE id=$1', [id_estudiante]);
    if(existe_estudiante.rowCount != 1){
        return res.status(404).json({
            error: {
                message: "No se puede crear la asignación",
                details: "Datos incorrectos"
              }
        })
    }
    //Existe Sesion
    const existe_sesion = await pool.query('SELECT * FROM sesiones WHERE id=$1', [id_sesion]);
    if(existe_sesion.rowCount != 1){
        return res.status(404).json({
            error: {
                message: "No se puede crear la asignación",
                details: "Datos incorrectos"
              }
        })
    }
    if(existe_sesion.rows[0].disponible <= 0){
        return res.status(409).json({
            error: {
                message: "Sesion sin cupo",
                details: "La sesion ya ha llegado al maximo de cupo"
              }
        })
    }

    //Validar que no se repita
    //Existe Asignacion
    const existe_asignacion = await pool.query('SELECT * FROM asignaciones WHERE id_sesion=$1 AND id_estudiante=$2', [id_sesion, id_estudiante]);
    if(existe_asignacion.rowCount != 0){
        return res.status(409).json({
            error: {
              message: "No se puede crear la asignación",
              details: "El alumno ya está asignado a otra sesión que se traslapa con el horario de esta sesión"
            }
          })
    }

    const nueva_sesion = existe_sesion.rows[0];
    const nuevo_inicio = new Date(nueva_sesion.start_datetime);
    const nuevo_fin = new Date(nueva_sesion.end_datetime)
    //Validar horario
    const sesiones_estudiante = (await pool.query('SELECT S.id, S.nombre, S.start_datetime, S.end_datetime FROM asignaciones A, estudiantes E, sesiones S WHERE A.id_sesion=S.id AND A.id_estudiante=E.id AND E.id=$1',[id_estudiante])).rows
    for (let i = 0; i < sesiones_estudiante.length; i++) {
        const asignada = sesiones_estudiante[i];
        const asignada_inicio = new Date(asignada.start_datetime);
        const asignada_fin = new Date(asignada.end_datetime)

        //Valida traslape:
        //Si el inicio de la nueva sesion esta entre una sesion existente
        if(((asignada_inicio < nuevo_inicio)&&(nuevo_inicio < asignada_fin))
        //O el fin de la nueva sesion esta entre una sesion existente
        || ((asignada_inicio < nuevo_fin)&&(nuevo_fin < asignada_fin))){
            return res.status(409).json({
                error: {
                  message: "No se puede crear la asignación",
                  details: "El alumno ya está asignado a otra sesión que se traslapa con el horario de esta sesión"
                }
              })
        }
    }

    //Todo esta seguro para hacer la asignacion
    //Quitar un cupo a la sesion
    await pool.query('UPDATE sesiones SET disponible = disponible-1 WHERE id=$1',[id_sesion])
    //Agregar asignacion
    await pool.query('INSERT INTO asignaciones (id_estudiante, id_sesion) VALUES ($1, $2);', [id_estudiante, id_sesion]);
    return res.json({
        message: "Asignacion Creada",
        body: {
            id_estudiante: id_estudiante,
            id_sesion: id_sesion
        }
    })
}


//ACTUALIZAR ASIGNACION
const updateAsignacion = async (req, res) =>{
    const id_estudiante = req.params.id_estudiante
    const id_sesion = req.params.id_sesion

    return res.status(405).json({
        error: {
            message: "No se puede actualizar asignacion",
            details: "La sesion no puede ser actualizada, elimine la sesion y cree una nueva"
          }
    })
}

const deleteAsignacion = async (req, res) =>{
    const id_estudiante = req.params.id_estudiante;
    const id_sesion = req.params.id_sesion;

    //Existe Asignacion
    const existe_asignacion = await pool.query('SELECT * FROM asignaciones WHERE id_sesion=$1 AND id_estudiante=$2', [id_sesion, id_estudiante]);
    if(existe_asignacion.rowCount == 0){
        return res.status(409).json({
            error: {
              message: "No se puede borrar la asignación",
              details: "Error en los valores"
            }
          })
    }
    
    //Devolver el cupo
    await pool.query('DELETE FROM asignaciones WHERE id_estudiante=$1 AND id_sesion=$2;', [id_estudiante, id_sesion]);
    //Eliminar asignacion
    await pool.query('UPDATE sesiones SET disponible = disponible+1 WHERE id=$1',[id_sesion])
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