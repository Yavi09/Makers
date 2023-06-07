<template>
    <div class="container servicios component-servicio">
        <div class="top">
            <span class="bold">Reservaciones</span>
            <router-link to="/reservaciones/crear" type="button" class="btn btn-makers">
                Agregar
            </router-link>
        </div>
        <table class="table table-dark table-hover">
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Cliente</th>
                    <th>Empleado</th>                
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
</template>
<script>
// componente para vista
export default {
    name : 'reservaciones'
}

</script>