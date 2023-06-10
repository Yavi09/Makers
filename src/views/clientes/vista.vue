<style>
.clientes {
    display: flex;
    flex-direction: column;
    gap: 2vh;
    height: 85%;
    overflow-y: scroll;
}

.cliente {
    height: 20%;
}

.smaller {
    font-size: smaller;
}

.card {
    background: #393534;
    color: #b4b0af;
}
</style>

<template>
    <div class="container servicios component-servicio h-100">
        <div class="top">
            <span class="bold">Clientes</span>
            <router-link to="/clientes/crear" type="button" class="btn btn-makers">
                Agregar
            </router-link>
        </div>
        <hr>
        <!-- aquí cargar los clientes -->
        <!-- verificar sí hay clientes -->
        <div class="clientes p-2" v-if="clientes.length > 0">
            <!-- recorrer los clientes encontrados -->

            <div class="card" v-for="(cliente, i) in clientes" :key="i">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-8">
                            <h5 class="card-title bold mb-1">{{ cliente.nombres }} {{ cliente.apellidos }}</h5>
                            <span class="card-text mb-0 smaller">{{ cliente.correo }}</span>
                            <p class="card-text mb-0 smaller">{{ cliente.dui }} </p>
                            <p class="card-text mb-0 smaller"> {{ cliente.telefono }} </p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
        <!-- si no hay clientes encontrados -->
        <div class="clientes p-2" v-else>
            <span class="bold">
                Cargando...
            </span>
        </div>
    </div>
</template>
<script>
// importar axios para hacer las peticiones
import axios from 'axios';

export default {
    name: 'clientes',
    data() {
        return {
            // arreglo con los clientes
            clientes: []
        }
    },
    // mounted se llaman los métodos que se quiere ejecutar en el load 
    mounted() {
        this.obtenerClientes();
    },
    // definir método aquí
    methods: {
        // método para obtener los clientes
        async obtenerClientes() {
            // hacer la petición con promesas
            axios.get('http://localhost:3000/api/clientes/')
                .then(res => { this.clientes = res.data })
                .catch(e => { console.error(e) })
        }
    }
}

</script>