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
        if (res.status(200)) res.json(DETALLES.rows);
    } catch (error) {
        console.log(error);
    }
}

/**
 * Método para obtener los tipos de servicio
 */
const getTiposSerivicios = async (req, res) => {
    try {
        // realiza la consulta para obtener todos los tipos de servicios
        const TIPOS = await POOL.query('SELECT * FROM tipos_servicios');
        // verificar sí la respuesta es satisfactoria
        if (res.status(200)) res.json(TIPOS.rows);
    } catch (error) {
        console.log(error);
    }
}

/**
 * Método para obtener los servicios según el tipo de servicio
 */
const getServicios = async (req, res) => {
    try {
        // obtener el tipo de servicio
        const TIPO = parseInt(req.params.tipo);
        // realizar query 
        const PRODUCTO = await POOL.query('SELECT id_servicio, nombre_servicio, existencias FROM servicios WHERE id_tipo_servicio = $1', [TIPO]);
        // verificar respuesta satisfactoria
        if (res.status(200)) res.json(PRODUCTO.rows);
    } catch (error) {
        console.log(error);
    }
}

// exportar modulos
module.exports = { get, getTiposSerivicios, getServicios };