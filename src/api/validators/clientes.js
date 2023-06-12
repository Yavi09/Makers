// archivo con las validaciones para los datos de los clientes (entidad en la db)

// importando check para validar
const { check } = require('express-validator')
// expresión regular con el dui
let dui = /^[0-9]{8}[-][0-9]{1}$/;

// constante para validar los datos en el servidor
const validateClient = [
    // verificar dato por dato según lo que se deceé

    // validación con nombres
    check('nombres')
        .exists()
        .not() //no sea
        .isEmpty() //vacia (up)
        // validar la cantidad máxima
        .isAlpha(),
    // con apellidos
    check('apellidos')
        .exists()
        .not()
        .isEmpty()
        // validar la cantidad máxima
        .isAlpha(),
    // con dui
    check('dui')
        // validación asignar vacío cuando no tienen dui
        .custom((value, { req }) => {
            // verificar sí no tiene valor, para asignar valor vacío, para no dar error en el insert
            if (!value) {
                value = ''
            }
            return true;
        })
        // validar formato de del dui
        .custom((value, { req }) => {
            let result = true;
            if (req.body['dui']) {
                // verificar sí coincide con el formato
                if (!dui.test(req.body['dui'])) {
                    throw new Error('Formato incorrecto del DUI');
                    result = false;
                }
            }
            return result;
        }),
    // email
    check('correo')
        // validación asignar vacío cuando no tienen correo
        .custom((value, { req }) => {
            // verificar sí no tiene valor, para asignar valor vacío, para no dar error en el insert
            if (!value) {
                value = ''
            }
            return true;
        })
        .isEmail(),
    // contraseña
    check('clave')
        .isLength({ min: 10 })


]

// exportar modulo
module.exports = { validateClient }