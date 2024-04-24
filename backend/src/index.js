const app = require('./app');

//Iniciar servidor
const PORT = 5000
app.listen(PORT, () => console.log(`Servidor funcionando en: http://localhost:${PORT}`));