<template>
    <div class="container servicios component-servicio">
        <div class="top">
            <span class="bold">Pedidos de Orden No.</span>
            <router-link to="/ordenes/detalles/crear" type="button" class="btn btn-makers">
                Agregar
            </router-link>
        </div>
        <hr>
    </div>
</template>
<script>
export default {
    name : 'detalle'
}

</script>