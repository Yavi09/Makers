// importar y asignar modulo para trabajar
const EXPRESS = require('express');

// requerir las rutas para clientes
const clientesRoutes = require('./clientes/routes');

// instanciando express
const APP = EXPRESS();
// settenado puerto, enviar un establecido por el sistema 
// sino establecer uno por defecto
APP.set('port', process.env.PORT || 3000);

// convertir a json las respuestas del servidor
APP.use(EXPRESS.json());

// usar las rutas
APP.use('/clientes', clientesRoutes);

// escuchar al servidor
APP.listen(APP.get('port'), () => {
    console.log('server in port '+APP.get('port'));
})
