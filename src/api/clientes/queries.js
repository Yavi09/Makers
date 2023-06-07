// requerir el modulo con los attrs de la conexión
const POOL = require('../db');

// método para obtener los clientes
// req (obtiene parametros en la consulta)
// res (retorna valor según resultado)
const getClientes = async (req, res) => {
    try {
        // realizar consulta
        const clientes = await POOL.query('SELECT * FROM clientes');
        // verificar el estado
        if (res.status(200)) res.json(clientes.rows) 
    } catch (e) {
        console.error(e.message);   
    }
}

// exportar funciones
module.exports = { getClientes }