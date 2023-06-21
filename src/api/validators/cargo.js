// archivo con las validaciones para los datos de los clientes (entidad en la db)

// importando body para validar
const { body } = require('express-validator')

// constante para validar los datos en el servidor
const validateCargo = [
    // verificar dato por dato según lo que se deceé

    //Validacion de cargos
    body('cargo', 'Ingresar cargo')
        .exists()
        .not() 
        .isEmpty() //vacio

]
 
// exportar modulo
module.exports = { validateCargo}