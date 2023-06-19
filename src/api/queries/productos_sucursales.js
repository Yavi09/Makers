// requerir la pool con los datos de la conexión
const POOL = require('../db');

/**
 * req: los datos que trae del lado del cliente al hacer la petición
 * res: la respuesta del servidor
 */

/** ! Siempre debe ir el req primero */
const get = async (req, res) => {
    try {
        // obtener el id de la sucursal
        const SUCURSAL = parseInt(req.params.id);
        // realizar query
        const PRODUCTOS = await POOL.query('SELECT * FROM productos_sucursales_view WHERE id_sucursal = $1', [SUCURSAL])
        // validar el resultado satisfactorio
        if(res.status(200)) res.json(PRODUCTOS.rows);
            
    } catch (error) {
        console.log(error);
    }
}

const getProductos = async (req, res) => {
    try {        
        // realizar consulta
        const PRODUCTOS = await POOL.query('SELECT id_servicio, nombre_servicio FROM productos_view WHERE existencias >= 1')
        // verificar estado satisfactorio
        // console.log(res)
        if(res.status(200)) res.json(PRODUCTOS.rows);
    } catch (error) { 
        console.log(error);
    }
}

// exportar modulos con los queries
module.exports = { get, getProductos };