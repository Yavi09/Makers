<template>
    <div class="container servicios component-servicio">
        <div class="top">
            <h5 class="bold">
                Factura
            </h5>
        </div>
        <hr>
        <div class="container">
            <div class="form-data">
                <span class="bold">
                    Empleado
                </span>
                <form action="" class="form-2">
                    <label for="" class="form-label">DUI</label>
                    <select class="form-select mb-3" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <div class="load">
                        <div class="mb-3 input-container">
                            <label for="nombres" class="form-label">Nombres</label>
                            <input type="text" class="form-control" id="nombres" v-model="cliente.nombre" readonly>
                        </div>
                        <div class="mb-3 input-container">
                            <label for="apellidos" class="form-label">Apellidos</label>
                            <input type="text" class="form-control" id="apellidos" v-model="cliente.apellido" readonly>
                        </div>
                    </div>
                </form>
            </div>
            <hr>
            <div class="form-data mb-30vh">
                <span class="bold">
                    Sucursal
                </span>
                <form action="" class="form-2 flex wp sp-bet">
                    <label for="" class="form-label">Dirección</label>
                    <select class="form-select mb-3" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </form>
            </div>
            <hr>
            <div class="buttons-reservacion form-data">
                <router-link to="/facturas" class="btn btn-makers">
                    Cancelar
                </router-link>
                <button type="button" class="btn btn-makers">Agregar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // nombre del componente
    name: "crearReservacion",
    // funciones que retornará el componente
    data() {
        return {
            // obj con datos del cliente
            cliente: {
                id: '',
                nombre: '',
                apellido: ''
            },
            // obj con datos del empleado
            empleado: {
                id: '',
                nombre: '',
                apellido: ''
            },
            // obj con datos de la reservación
            reservacion: {
                fecha: '',
                hora: ''
            }
        }
    },
    // métodos del componente
    methods: {

    }
}

</script>