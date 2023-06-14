<template>
    <div class="container servicios component-servicio">
        <div class="top">
            <span class="bold">Reservaciones</span>
            <router-link to="/reservaciones/crear" type="button" class="btn btn-makers">
                Agregar
            </router-link>
        </div>
        <hr>
    </div>
</template>
<script>
// componente para vista
export default {
    name: 'reservaciones'
}

</script>