<style>
#sucursales option {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 50px;
}
</style>

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
                            <label for="sucursales" class="form-label">Sucursal</label>
                            <!-- verifiacr sí existen sucursales recuperadas -->
                            <select class="form-select mb-3" aria-label="Default select example" id="sucursales"
                                v-if="sucursales.length > 0">
                                <option selected>Seleccionar</option>
                                <!-- recorrer los datos de las sucursales -->
                                <option v-for="(sucursal, i) in sucursales" :key="i" :value="sucursal.id_sucursal">{{
                                    sucursal.direccion }}</option>
                            </select>
                            <!-- sino existen sucursales -->
                            <select class="form-select mb-3" name="error" v-else id="">
                                <option selected>No se encontraron sucursales</option>
                            </select>
                        </div>
                        <div class="mb-3 input-container">
                            <label for="horario" class="form-label">Horarios</label>
                            <!-- verificar sí existen horarios -->
                            <select class="form-select mb-3" aria-label="Default select example" id="horario"
                                v-if="horarios.length > 0">
                                <option selected>Seleccionar</option>
                                <!-- recorrer los hotarios encontrados -->
                                <option v-for="(horario, i) in horarios" :key="i" :value="horario.id_horario">
                                    {{ horario.inicio }} - {{ horario.cierre }}
                                
                                </option>
                            </select>
                            <select class="mb-3 form-select" v-else>
                                <option>No se encontraron horarios</option>
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
// importar axios para realizar peticiones
import axios from 'axios';
// exportar componente
export default {
    name: 'crearEmpleado',
    data() {
        return {
            // arreglo con info. sucursales
            sucursales: [],
            // arreglo para obtener datos de horarios
            horarios: []
        }
    },
    mounted() {
        // cargar sucursales
        this.cargarSucursales();
        // cargar horarios
        this.cargarHorarios();
    },
    methods: {
        cargarSucursales() {
            try {
                // hacer petición para obtener sucursales y horarios
                axios.get('http://localhost:3000/api/empleados/sucursales')
                    .then(res => { this.sucursales = res.data }) // obtener los datos de la petición
                    .catch(e => { console.log(e) })
            } catch (error) {
                console.error(error);
            }
        },
        cargarHorarios() {
            try {
                axios.get('http://localhost:3000/api/empleados/horarios')
                    .then(res => { this.horarios = res.data; console.log(res.data) }) //obtener los datos de la petición
                    .catch(e => { console.log(e) }) // caso de error
            } catch (error) {
                console.error(error);
            }
        }
    }
} 
</script>