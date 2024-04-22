const fs = require('fs');

const leerJSON = (path)=>{
    console.log(path)
    try {
        const data = fs.readFileSync( path, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.log('JSON no encontrado sesiones programadas');
        return null;
    }
}

module.exports = {
    leerJSON
}