// importar enrutador de express
const { Router } = require('express');
// importar métodos con las transferencias SQL
const { store} = require('../queries/tipos_servicios');
// importar validaciones
const { validateTipoServicios, validateTipoServicios } = require('./../validators/tipos_servicios')

// instanciar router
const SERVICIOS = Router();

// obtener todos los datos
SERVICIOS.get('/', get);
// guardar datos
SERVICIOS.post('/', validateTipoServicios, store);

// exportar enrutador con los inserts, selects, deletes y updates
module.exports = SERVICIOS;