<style>
.component-render {
    height: 100%;
}

.buttons-servicio {
    position: relative;
    bottom: 0;
}

.mb-40vh {
    margin-bottom: 40vh;
}

.form-1 {
    width: 100%;
}
</style>
<template>
    <div class="container servicios component-servicio component-render">
        <div class="top">
            <h5 class="bold">
                Servicio
            </h5>
        </div>
        <hr>
        <div class="container agg-servicio">
            <div class="form-data mb-40vh">
                <form action="" class="form-1">
                    <div class="load">
                        <div class="mb-3 input-container">
                            <label for="nombre" class="form-label">Nombre</label>
                            <input v-model="servicio.nombre" type="text" class="form-control" @focus="ValidityState" id="nombre">
                        </div>
                        <div class="mb-3 input-container">
                            <label for="precio" class="form-label">Precio</label>
                            <input v-model="servicio.precio" type="text" class="form-control" id="precio">
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="descripcion" class="form-label">Descripción</label>
                        <input  v-model="servicio.descripcion" type="text" class="form-control" id="descripcion">
                    </div>
                </form>
                <hr>
            </div>
            <hr>
            <div class="buttons-reservacion buttons-servicio form-data">
                <router-link to="/servicios" class="btn btn-makers">
                    Cancelar
                </router-link>
                <button type="button" class="btn btn-makers">Agregar</button>
            </div>
        </div>
    </div>
</template>
<script>
// definir componente 
export default {
    name: "crearServicio",
    data () {
        return {
            servicio : {
                // entidades de la tabla, que se modificarán desde los inputs
                tipo : 1,
                nombre : '',
                descripcion : '',
                precio : '',
                existencias : 1,
                estado : 1
            }
        }
    }
}

</script>