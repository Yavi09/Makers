// requerir el modulo con los attrs de la conexión
const POOL = require('../db');

// metodo para obtener los cargos
// req (obtiene parametros de consulta)
// res (retorna valor segun resultado)
const get = async (req, res) => {
    try {
        //realizar consulta
        const cargos = await POOL.query('SELECT * FROM cargos');
        //verificar el estado
        if (res.status(200)) res.json(cargos.rows)     
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
        // asignar a u arreglo los valores del req
        const { cargo } = req.body;
        // preparando query con los datos
        POOL,query('INSER INTO cargos(cargo) VALUES ($1)', [cargo],
        // funcion
        (err, result) => {
            // verificar si existe error
            if (err) {
                res.json({error: err.message});
            }
                            // sino enviar estado exitoso
                res.status(201).send('Cargo agregado' + 'INSERT INTO cargos(cargo) VALUES ($1)'
                    + [cargo]);

        })
    } catch (error) {
        console.error(error);
    }
}