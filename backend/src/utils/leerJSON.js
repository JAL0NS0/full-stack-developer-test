const fs = require('fs');

const leerJSON = ({path = 'src/sesiones.json'} = {})=>{
    try {
        const data = fs.readFileSync( path, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.log('JSON no encontrado programadas');
        return null;
    }
}

module.exports = {
    leerJSON
}