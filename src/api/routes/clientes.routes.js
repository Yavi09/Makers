// importar enrutador de express
const { Router } = require('express');
// importar métodos con las transferencias SQL
const { get, store, one } = require('../queries/clientes');
// importar validaciones
const { validateClient } = require('./../validators/clientes')

// instanciar router
const CLIENTES = Router();

// obtener todos los datos
CLIENTES.get('/', get);
// guardar datos
CLIENTES.post('/', validateClient, store);
// obtener cliente según id
CLIENTES.get('/:id', one);

// exportar enrutador con los inserts, selects, deletes y updates
module.exports = CLIENTES;