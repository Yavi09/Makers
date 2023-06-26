// requerir el modulo con los attrs de la conexión
const POOL = require('../db');

// metodo para obtener los tipos de servicios
// req (obtiene parametros de consulta)
// res (retorna valor segun resultado)
const get = async (req, res) => {
    try {
        //realizar consulta
     //   const tiposervicios = await POOL.query('SELECT * FROM cargos');
        //verificar el estado
        if (res.status(200)) res.json(tiposervicios.rows)     
    } catch (e) {
        console.error(e.message);
    }
}

/** Método para guardar cargos de los empleados
 * req, datos enviados del front
 * res, respuesta del servidor
 */
const store = async (req, res) => {
    try {
        //asignar al arreglo los valores del req
        const { cargo } = req.body;
        // preparando query con los datos
        POOL,query('INSERT INTO tipos_servicios(tipo_servicio) VALUES ($1)', [tiposervicios],
        //funcion
        (err, result) => {
            //verificar si hay error
            if (err) {
                res.json({error:err.message});
            }
            //si no existe error, enviado exitosamente
            res.status(201).send('tipo servicio agregado' + 'INSERT INTO tipos_servicio(tipo_servicio) VALUES ($1)'
            + [tiposervicios]);
        })
    } catch (error) {
        console.error(error);
    }
}