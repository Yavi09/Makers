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
        if (res.status(200)) res.json(PRODUCTOS.rows);

    } catch (error) {
        console.log(error);
    }
}

/**
 * Método para obtener el nombre los productos disponibles
 */
const getProductos = async (req, res) => {
    try {
        // realizar consulta
        const PRODUCTOS = await POOL.query('SELECT id_servicio, nombre_servicio FROM productos_view WHERE existencias >= 1')
        // verificar estado satisfactorio
        // console.log(res)
        if (res.status(200)) res.json(PRODUCTOS.rows);
    } catch (error) {
        console.log(error);
    }
}

/**
 * Método para agregar producto a una sucursal
 */
const store = (req, res) => {
    try {
        // obtener los datos del frontend
        const { sucursal, producto, cantidad } = req.body;
        console.log(req.body);
        // realizar transacción SQL
        POOL.query('INSERT INTO detalles_servicios_sucursales(id_sucursal, id_servicio, cantidad) VALUES ($1, $2, $3)',
            [sucursal, producto, cantidad], (err, result) => {
                // verificar error
                if (err) {
                    // sí es ejecuta esto, el status 201 no se enviará
                    res.json({ error: err.message });
                    return;
                }
                res.status(201).send('Producto agregado');
            })
    } catch (error) {
        console.log(error);
    }
}


// exportar modulos con los queries
module.exports = { get, getProductos, store };