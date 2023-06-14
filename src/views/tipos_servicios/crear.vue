<style>
.mb-49vh{
    margin-bottom: 49vh;
}
</style>
<template>
    <div class="container servicios component-servicio component-render">
        <div class="top">
            <h5 class="bold">
                Tipo de servicio
            </h5>
        </div>
        <hr>
        <div class="container agg-servicio">
            <div class="form-data mb-49vh">
                <form action="" class="form-1">
                    <div class="mb-3">
                        <label for="nombre" class="form-label">Tipo de servicio</label>
                        <input v-model="servicio.nombre" type="text" class="form-control" @focus="ValidityState" id="nombre">
                    </div>                
                </form>
                <hr>
            </div>
            <hr>
            <div class="buttons-reservacion buttons-servicio form-data">
                <router-link to="/servicios/tipos" class="btn btn-makers">
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