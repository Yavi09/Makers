// importar enrutador de express
const { Router } = require('express');
// importar métodos con las transferencias SQL
const { getClientes, guardarCliente } = require('./queries');

// instanciar router
const CLIENTES = Router();

// obtener todos los datos
CLIENTES.get('/', getClientes); 
// guardar datos
CLIENTES.post('/', guardarCliente);
// validar aquí 

// exportar enrutador
module.exports = CLIENTES;