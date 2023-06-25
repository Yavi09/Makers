// importar enrutador de express
const { Router } = require('express');
// importar métodos con las transferencias SQL
const { store} = require('../queries/TipoServicios');
// importar validaciones
const { validateTipoServicios, validateTipoServicios } = require('./../validators/TipoServicios')

// instanciar router
const SERVICIOS = Router();

// obtener todos los datos
SERVICIOS.get('/', get);
// guardar datos
SERVICIOS.post('/', validateTipoServicios, store);

// exportar enrutador con los inserts, selects, deletes y updates
module.exports = SERVICIOS;