// requiriendo la pool con los attrs de la conexión
const POOL = require('../db');

/**
 * req: información que viene del frontend
 * res: respuesta del servidor
 */


/**
 * Método para obtener los empleados
 */
const get = async (req, res) => {
    try {
        // realizar consulta
        const EMPLEADOS = await POOL.query('SELECT * FROM empledos_view');
        // verificar el estado satisfactorio para retornar los datos
        if (res.status(200)) res.json(EMPLEADOS.rows);
    } catch (error) {
        console.error(error);
    }
}

/**
 * Método para obtener las sucursales
 */
const getSucursales = async (req, res) => {
    try {
        // realizar consulta
        const SUCURSALES = await POOL.query('SELECT id_sucursal, direccion FROM sucursales');
        // verificar respuesta satisfactoria, para enviar los datos
        if (res.status(200)) res.json(SUCURSALES.rows);
    } catch (error) {
        console.error(error);
    }
}

/**
 * Método para obtener los horarios que puede tener un empleado
 */
const getHorarios = async (req, res) => {
    try {
        // formato de hora HH12:mm
        let formato = 'HH12:MI';
        // realizar consulta
        const HORARIOS = await POOL.query('SELECT id_horario, to_char(hora_apertura, $1) as inicio, to_char(hora_cierre, $1) as cierre FROM horarios', [formato]); // con * tardo .118 mls
        // verificar respuesta satisfeca
        if (res.status(200)) res.json(HORARIOS.rows);
    } catch (error) {
        console.error(error);
    }
}

/**
 * Método para obtener los cargos 
 */

const getCargos = async (req, res) => {
    try {
        // realizar consultar
        const CARGOS = await POOL.query('SELECT * FROM cargos');
        // verificar el estado de la respuesta para retornar datos
        if (res.status(200)) res.json(CARGOS.rows);
    } catch (error) {
        console.error(error);
    }
}

/**
 * Método para crear un empleado
 */
const store = (req, res) => {
    let msg = '';
    let status = '';
    try {
        // obtener los datos del req
        const { nombres, apellidos, dui, clave, planilla, telefono, correo, sucursal, horario, cargo } = req.body;
        // realizar query o insert y enviarle los parametros
        POOL.query('INSERT INTO empleados(nombres, apellidos, dui, clave, planilla, telefono, correo,id_sucursal, id_horario, id_cargo) VALUES ($1,$2, $3, $4, $5, $6, $7, $8, $9, $10)',
            [nombres, apellidos, dui, clave, planilla, telefono, correo, sucursal, horario, cargo], (err, result) => {

                // verificar sí hubo un error                                
                if (err) {
                    // sí es ejecuta esto, el status 201 no se enviará
                    res.json({ error: err.message});
                    return;
                }
                res.status(201).send('Empleado agregado');
                // verificar estado satisfactorio
                // res.status(201).send('Empleado agregado')
            })
    } catch (error) {
        console.log(error)
    }
}

/**
 * Método para obtener los datos del empleado según el cliente requiera
 */
const one = async (req, res) => {
    try {
        // obtener del parametro de la url el id
        const IDEMPLEADO = parseInt(req.params.id) ;
        // convertirlo a entero, por sí el cliente modifica dato

        // esperar la respuesta cuando se haga la consulta
        const EMPLEADO = await POOL.query('SELECT * FROM empledos_view WHERE id_empleado = $1', [IDEMPLEADO]);
        // verificar si no existe
        // verificar sí el estado es el esperado
        if (res.status(201)) { res.json(EMPLEADO.rows)};        
    
    } catch (error) {
        console.log(error);
    }
}

// exportación de modulos
module.exports = { get, getSucursales, getHorarios, getCargos, store, one }