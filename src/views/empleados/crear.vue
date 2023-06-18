<style>
.width-auto {
    width: auto;
}

.width-30 {
    width: 30%;
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
        <form @submit.prevent="crear">

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
                                <input type="text" v-model="this.model.empleado.nombres" class="form-control" id="nombres">
                            </div>
                            <div class="mb-3 input-container">
                                <label for="apellidos" class="form-label">Apellidos</label>
                                <input type="text" class="form-control" v-model="this.model.empleado.apellidos"
                                    id="apellidos">
                            </div>
                        </div>
                        <label for="dui">DUI</label>
                        <input type="text" class="form-control" id="dui" v-model="this.model.empleado.dui">
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
                                    v-if="sucursales.length > 0" v-model="this.model.empleado.sucursal">
                                    <option selected>Seleccionar</option>
                                    <!-- recorrer los datos de las sucursales -->
                                    <option v-for="(sucursal, i) in sucursales" :key="i" :value="sucursal.id_sucursal">{{
                                        sucursal.direccion }}</option>
                                </select>
                                <!-- sino existen sucursales -->
                                <select class="form-select mb-3" name="error" v-else>
                                    <option selected>No se encontraron sucursales</option>
                                </select>
                            </div>
                            <div class="mb-3 input-container">
                                <label for="cargos" class="form-label">Cargo</label>
                                <!-- verifiacr sí existen sucursales recuperadas -->
                                <select class="form-select mb-3" aria-label="Default select example" id="cargos"
                                    v-if="cargos.length > 0" v-model="this.model.empleado.cargo">
                                    <option selected>Seleccionar</option>
                                    <!-- recorrer los datos de las sucursales -->
                                    <option v-for="(cargo, i) in cargos" :key="i" :value="cargo.id_cargo">{{
                                        cargo.cargo }}</option>
                                </select>
                                <!-- sino existen sucursales -->
                                <select class="form-select mb-3" name="error" v-else>
                                    <option selected>No se encontraron sucursales</option>
                                </select>
                            </div>
                        </div>
                        <div class="load">
                            <div class="mb-3 input-container width-auto">
                                <label for="horario" class="form-label">Horarios</label>
                                <!-- verificar sí existen horarios -->
                                <select class="form-select mb-3" aria-label="Default select example" id="horario"
                                    v-if="horarios.length > 0" v-model="this.model.empleado.horario">
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
                            <div class="mb-3 input-container width-30">
                                <label for="clave" class="form-label">Contraseña</label>
                                <input type="password" class="form-control" id="clave" v-model="this.model.empleado.clave">
                            </div>
                            <div class="mb-3 input-container width-30">
                                <label for="planilla" class="form-label">Planilla</label>
                                <input type="text" class="form-control" id="planilla"
                                    v-model="this.model.empleado.planilla">
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
                                <input type="text" class="form-control" id="telefono"
                                    v-model="this.model.empleado.telefono">
                            </div>
                            <div class="mb-3 input-container">
                                <label for="correo" class="form-label">Correo</label>
                                <input type="email" class="form-control" id="correo" v-model="this.model.empleado.correo">
                            </div>
                        </div>
                    </form>
                </div>

                <hr>
                <div class="buttons-reservacion form-data">
                    <router-link to="/empleados" class="btn btn-makers">
                        Cancelar
                    </router-link>
                    <button type="submit" class="btn btn-makers">Agregar</button>
                </div>
            </div>
        </form>
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
            horarios: [],
            cargos: [],
            model: {
                empleado: {
                    nombres: '',
                    apellidos: '',
                    dui: '',
                    clave: '',
                    planilla: '',
                    telefono: '',
                    correo: '',
                    sucursal: 'Seleccionar',
                    cargo: 'Seleccionar',
                    horario: 'Seleccionar',
                }
            }
        }
    },
    mounted() {
        // cargar sucursales
        this.cargarSucursales();
        // cargar horarios
        this.cargarHorarios();
        this.cargarCargos();
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
                // realizar petición
                axios.get('http://localhost:3000/api/empleados/horarios')
                    .then(res => { this.horarios = res.data; console.log(res.data) }) //obtener los datos de la petición
                    .catch(e => { console.log(e) }) // caso de error
            } catch (error) {
                console.error(error);
            }
        },
        cargarCargos() {
            // realizar petición
            axios.get('http://localhost:3000/api/empleados/cargos')
                // cuando pase todo correctamente
                .then(res => { this.cargos = res.data }) // cuando todo salga correcto asignar valores a arreglo
                .catch(e => { console.error(e) }) // mostrar mensaje de error
        },
        crear() {
            // validar datos
        }
    }
} 
</script>