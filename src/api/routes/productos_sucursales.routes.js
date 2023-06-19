// requerir del enrutador de express
const { Router } = require('express');
// requerir de los queries
const { get } = require('../queries/productos_sucursales');

// instanciar Router
const PRODUCTOS = Router();
// ir a index.js de api para usar o habilitar estas rutas

PRODUCTOS.get('/:id', get);


module.exports = PRODUCTOS;