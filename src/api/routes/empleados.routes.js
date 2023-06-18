// requerir del ruteados para activar los métodos 
const { Router} = require('express');
// requerir los métodos de los queries
const { get, getSucursales } = require('../queries/empleados');

// instanciado router
const EMPLEADO = Router();

// métodos para hacer acciónes
EMPLEADO.get('/', get);
EMPLEADO.get('/get', getSucursales);

// exportar ruteador
module.exports = EMPLEADO;
