// archivo con las funciones para validar
// ! VALIDA DATOS DEL FRONTEND

// variable con las letras
let ltrs = /^[A-Za-zÁÉÍÓÚÑáéíóúñ\s']+$/;
// variable con los números
let nums = /^[0-9]+$/;
// exp. reg. dui
let dui = /^[0-9]{8}[-][0-9]{1}$/;
// exp. regular para correo
let mail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
/**
 * Método para validar que la cadena de texto solamente tenga letras
 */
export const onlyLtrs = value => {
    // verificar sí el valor es una cadena de texto
    return (ltrs.test(value));

}

export const onlyNumb = value => {
    // verificar sí coincide
    return (nums.test(value));
}

export const formatDui = value => {
    // validar sí coincide con la expresión regular
    return (dui.test(value));
}

export const formatEmail = value => {
    // validar sí coincide con la presión regular
    // console.log((mail.test(value)));
    return (mail.test(value));
}