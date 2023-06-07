<style>
.w-70 {
    width: 70%;
}
.mb-15vh{
    margin-bottom: 15vh;
}
</style>

<template>
    <div class="container servicios component-servicio">
        <div class="top">
            <h5 class="bold">
                Cliente
            </h5>
        </div>
        <hr>
        <div class="container">
            <div class="form-data">
                <span class="bold">
                    info.
                    Personal
                </span>
                <form action="" class="form-2 w-70">
                    <div class="load">
                        <div class="mb-3 input-container">
                            <label for="nombres" class="form-label">Nombres</label>
                            <input type="text" class="form-control" id="nombres">
                        </div>
                        <div class="mb-3 input-container">
                            <label for="apellidos" class="form-label">Apellidos</label>
                            <input type="text" class="form-control" id="apellidos">
                        </div>
                    </div>
                    <label for="dui">DUI</label>
                    <input type="text" class="form-control" id="dui">
                </form>
            </div>
            <hr>
            <div class="form-data">
                <span class="bold">
                    Contacto
                </span>
                <form action="" class="form-2 w-70">
                    <div class="load">
                        <div class="mb-3 input-container">
                            <label for="telefono" class="form-label">Teléfono</label>
                            <input type="text" class="form-control" id="telefono">
                        </div>
                        <div class="mb-3 input-container">
                            <label for="correo" class="form-label">Correo</label>
                            <input type="email" class="form-control" id="correo">
                        </div>
                    </div>
                </form>
            </div>
            <hr>
            <div class="form-data mb-15vh">
                <span class="bold">
                    Cuenta
                </span>
                <form action="" class="form-2 w-70 flex wp sp-bet">
                    <label for="clave">Contraseña</label>
                    <input type="password" class="form-control" id="clave">
                </form>
            </div>
            <hr>
            <div class="buttons-reservacion form-data">
                <router-link to="/clientes" class="btn btn-makers">
                    Cancelar
                </router-link>
                <button type="button" class="btn btn-makers">Agregar</button>
            </div>
        </div>
    </div>
</template>
<script>
// exportando el componente principal
export default {
    name: 'crearCliente',
    data() {
        return {

        }
    }
}
</script>