// importar enrutador de express
const { Router } = require('express');
// importar métodos con las transferencias SQL
const { getClientes } = require('./queries');

// instanciar router
const CLIENTES = Router();

CLIENTES.get('/', getClientes); 
// validar aquí 

// exportar enrutador
module.exports = CLIENTES;