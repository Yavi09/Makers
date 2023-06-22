// importar enrutador de express
const { Router } = require('express');
// importar métodos con las transferencias SQL
const { store} = require('../queries/cargo');
// importar validaciones
const { validateClient, validateCargo } = require('./../validators/cargo')

// instanciar router
const CARGO = Router();

// obtener todos los datos
CARGO.get('/', get);
// guardar datos
CLIENTES.post('/', validateCargo, store);

// exportar enrutador con los inserts, selects, deletes y updates
module.exports = CARGOS;