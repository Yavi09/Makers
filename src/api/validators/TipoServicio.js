// archivo con las validaciones para los datos de los clientes (entidad en la db)

// importando body para validar
const { body } = require('express-validator')

// constante para validar los datos en el servidor
const validateTipoServicio = [
    // verificar dato por dato según lo que se desee

    //Validacion de servicios
    body('Tipo servicio', 'Ingresar servicio')
        .exists()
        .not() 
        .isEmpty() //vacio

]
 
// exportar modulo
module.exports = { validateTipoServicio}