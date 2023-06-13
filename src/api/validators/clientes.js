// archivo con las validaciones para los datos de los clientes (entidad en la db)

// importando body para validar
const { body } = require('express-validator')
// expresión regular con el dui
let dui = /^[0-9]{8}[-][0-9]{1}$/;
// exp. regular para correo
let mail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

// constante para validar los datos en el servidor
const validateClient = [
    // verificar dato por dato según lo que se deceé

    // validación con nombres
    body('nombres', 'Ingresar nombre')
        .exists()
        .not() //no sea
        .isEmpty() //vacio
        // validar la cantidad máxima
        .isAlpha(),
    // con apellidos
    body('apellidos', 'Ingresar apellido')
        .exists()
        .not()
        .isEmpty()
        // validar la cantidad máxima
        .isAlpha(),
    // con dui
    body('dui')
        // validación asignar vacío cuando no tienen dui
        .custom((value, { req }) => {
            // verificar sí no tiene valor, para asignar valor vacío, para no dar error en el insert
            if (!value) {
                value = ' '
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
    body('correo')
        // validación asignar vacío cuando no tienen correo
        .custom((value, { req }) => {
            // verificar sí no tiene valor, para asignar valor vacío, para no dar error en el insert
            if (!value) {
                value = ' '
            } else {
                if (mail.test(req.body['correo'])) {
                    return true
                }
                else { console.log('formato incorrecto mail'); throw new Error('Formato de correo incorrecto'); }
            }
        })
        .isEmail(),
    // contraseña
    body('clave', 'Ingresar correo')
        .isLength({ min: 10 })


]

// exportar modulo
module.exports = { validateClient }