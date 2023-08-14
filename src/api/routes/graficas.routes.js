// requerir de enrutador de express
const { Router } = require('express');
// requerir de los metodos para obtener los datos para las graficas
const { getClientes } = require('../queries/graficas');

// instanciar enrutados
const ROUTER = Router();

//Definiendo rutas segun urls personalizadas para accedera los datos del servidor consulta a la base
//para retornarle el resultado del servidor (lo que se obtiene al realizar las consultas)
ROUTER.get('/clientes', getClientes)

//exportar enrutados
module.exports = ROUTER
// ir a ./index.js para crear rutas accesibles