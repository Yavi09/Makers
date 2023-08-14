//requerir metodo para ejecutar las peticiones a base
const { execute } = require('../MySQL');
// requerir metodo para obtener el codigo de error y enviar mensaje
const { getError } = require('../helpers/errors')
 
/**
 * Metodo para obtener los 7 clientes con mas ordenes
 *  @param {*} req cuerpo de la peticion
 *  @param {*} res respuesta del servidor
 */
const getClientes = (req, res) => {
    execute('SELECT * FROM clientes')
    .then(rows => {
        res.status(200).json(rows)
    }).catch(rej => {
        res.status(406).send({error: getError(rej) })
    })
}

//exportar los metodos para obtener los datos para pintar las graficas
module.exports = { getClientes };