// archivo para dar resultado después de aplicar las validaciones del lado del servidor
const { validationResult } = require('express-validator');

// método para dar resultado después de validar
const validate = (req, res, next) => {
    // intentar verificar sí existe un error en los datos (validar datos)
    try {
        // validar cada dato del front (req)
        validationResult(req).throw();
        // retornar al siguiente
        return next();
    } catch (error) {
        // retornar el estado del error y el mensaje
        res.status(403);
        res.send({ errors: error.array() });
    }
}

// exportar
module.exports = { validate };