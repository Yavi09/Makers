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

/**
 * Método para agregar un detalle según la orden
 */
const store = (req, res) => {
    try {
        // obtener los datos del frontend
        const { servicio, cantidad, descuento, orden } = req.body;
        console.log(req.body)
        // realizar query
        POOL.query('INSERT INTO detalle_ordenes(id_servicio, cantidad, descuento, id_orden) VALUES ($1, $2, $3, $4)',
            [servicio, cantidad, descuento, orden],
            (err, result) => {
                // verificar sí hubo un error
                if (err) {
                    // enviar mensaje de error
                    res.json({ error: err.message });
                    // retornar
                    return;
                }
                res.status(201).send('Detalle agregado');
            }
        )
    } catch (error) {
        console.log(error);
    }
}

// exportar modulos
module.exports = { get, getTiposSerivicios, getServicios, store };