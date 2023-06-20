<style>
.mb-36vh {
    margin-bottom: 36vh;
}

.align-center {
    align-self: center;
}

.switch-options {
    width: 25%;
    display: flex;
    justify-content: space-between;
}

.form-check-input:checked {
    background-color: #393534;
    border-color: #393534;
}

.form-switch .form-check-input {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
}

.form-check-input:focus {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='-4 -4 8 8'%3e%3ccircle r='3' fill='%23fff'/%3e%3c/svg%3e");
    border-color: #b4b0af;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(84, 84, 84, 0.48);
}

.form-check-input {
    background-color: #393534;
    border-color: #393534;
}

.makers-switch {
    background-repeat: no-repeat;
}

.h-100 {
    height: 100%;
}
</style>

<template>
    <div class="container servicios component-servicio h-100">
        <div class="top">
            <h5 class="bold">
                Pedido
            </h5>
        </div>
        <hr>
        <div class="container">
            <div class="form-data">
                <form action="" class="form-1">
                    <div class="load">
                        <div class=" input-container">
                            <label for="" class="form-label">Tipo de servicio</label>
                            <!-- caso donde existan más de 0 tipos de servicios -->
                            <select class="form-select mb-3" v-if="tipos.length > 0">
                                <option selected>Seleccionar</option>
                                <option v-for="(tipo, i) in tipos" :key="i" :value="tipo.id_tipo_servicio">{{ tipo.tipo_servicio }}</option>
                            </select>                            
                            <!-- caso default-->
                            <select class="form-select mb-3" v-else>
                                <option selected>No se encontraron tipos de servicio</option>
                            </select>
                                                    
                        </div>
                        <div class="input-container">
                            <label for="" class="form-label">Servicio</label>
                            <select class="form-select mb-3" aria-label="Default select example">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
            <div class="form-data mb-36vh">
                <form action="" class="form-1">
                    <div class="load">
                        <div class="mb-3 input-container">
                            <label for="" class="form-label">Descuento</label>
                            <input type="number" class="form-control" id="" min="1" max="">

                        </div>
                        <div class="mb-3 input-container">
                            <label for="" class="form-label">Cantidad</label>
                            <!-- en max obtener la existencias del producto -->
                            <input type="number" class="form-control" id="" min="1" max="">
                        </div>
                    </div>
                </form>
            </div>
            <hr>
            <div class="buttons-reservacion form-data">
                <router-link :to="{ path: '/ordenes/' + this.$route.params.orden + '/detalles' }" class="btn btn-makers">
                    Cancelar
                </router-link>
                <button type="button" class="btn btn-makers">Agregar</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    // nombre del componente
    name: "crearDetalle",
    // funciones que retornará el componente
    data() {
        return {
            tipos: [],
            model: {
                tipo: '',
                pedido: {
                    servicio: '',
                    descuento: '',
                    cantidad: ''
                }
            }
        }
    },
    mounted() {
        this.cargarTiposServicios();
    },
    // métodos del componente
    methods: {
        // método para obtener los tipos de servicios
        cargarTiposServicios() {
            axios.get('http://localhost:3000/api/ordenes/detalles/tipos')
                .then(res => { this.tipos = res.data; })
                .catch(e => alert(e));
        }
    }
}

</script>