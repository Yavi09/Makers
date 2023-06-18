// requerir del ruteados para activar los métodos 
const { Router} = require('express');
// requerir los métodos de los queries
const { get, getSucursales, getHorarios, getCargos } = require('../queries/empleados');

// instanciado router
const EMPLEADO = Router();

// métodos para hacer acciónes
EMPLEADO.get('/', get);
EMPLEADO.get('/sucursales', getSucursales);
EMPLEADO.get('/horarios', getHorarios);
EMPLEADO.get('/cargos', getCargos);

// exportar ruteador
module.exports = EMPLEADO;
