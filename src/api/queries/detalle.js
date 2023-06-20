// requerir de la conexión
const POOL = require('../db');

/**
 * Método para obtener los detalles según la orden de la url
 */
const get = async (req, res) => {
    try {
        // obtener orden
        const ORDEN = parseInt(req.params.orden);
        // realizar consulta
        const DETALLES = await POOL.query('SELECT * FROM detalle_view WHERE id_orden = $1', [ORDEN]);
        // verficar estado existoso
        if(res.status(200)) res.json(DETALLES.rows);        
    } catch (error) {
        console.log(error);
    }
}

// exportar modulos
module.exports = { get};