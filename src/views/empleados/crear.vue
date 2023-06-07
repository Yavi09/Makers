<style></style>

<template>
    <div class="container servicios component-servicio">
        <div class="top">
            <h5 class="bold">
                Empleado
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
                    Especificaciones
                </span>

                <form action="" class="form-2 w-70">
                    <div class="load">
                        <div class="mb-3 input-container">
                            <label for="sucursal" class="form-label">Sucursal</label>
                            <select class="form-select mb-3" aria-label="Default select example" id="sucursal">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div class="mb-3 input-container">
                            <label for="horario" class="form-label">Horarios</label>
                            <select class="form-select mb-3" aria-label="Default select example" id="horario">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                    <div class="load">
                        <div class="mb-3 input-container">
                            <label for="clave">Contraseña</label>
                            <input type="password" class="form-control" id="clave">
                        </div>
                        <div class="mb-3 input-container">
                            <label for="planilla">Planilla</label>
                            <input type="text" class="form-control" id="planilla">
                        </div>
                    </div>
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
            <div class="buttons-reservacion form-data">
                <router-link to="/empleados" class="btn btn-makers">
                    Cancelar
                </router-link>
                <button type="button" class="btn btn-makers">Agregar</button>
            </div>
        </div>
    </div>
</template>

<script>
// exportar componente
export default {
    name: 'crearEmpleado',
    data() {
        return {

        }
    }
} 
</script>