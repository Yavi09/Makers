<template>
    <div class="container tipos component-servicio">
        <span class="bold">
            Cargos
        </span>
        <router-link to="/empleados/cargos" type="button" class="btn btn-makers">
            Ver
        </router-link>
    </div>

    <div class="container servicios component-servicio">
        <div class="top">
            <span class="bold">Empleados</span>
            <router-link to="/empleados/crear" type="button" class="btn btn-makers">
                Agregar
            </router-link>
        </div>
        <hr>
    </div>
</template>
<script>
export default {
    name: 'empleados'
}

</script>