<template>
    <div class="container tipos component-servicio">
        <span class="bold">
            Cargos
        </span>
        <button type="button" class="btn btn-makers">
            Ver
        </button>
    </div>

    <div class="container servicios component-servicio">
        <div class="top">
            <span class="bold">Empleados</span>
            <router-link to="/empleados/crear" type="button" class="btn btn-makers">
                Agregar
            </router-link>
        </div>
        <table class="table table-dark table-hover">
            <thead>
                <tr>
                    <th>Nombres</th>
                    <th>DUI</th>
                    <th>Telefono</th>
                    <th>Correo</th>
                    <th>Sucursal</th>
                    <th>Horario</th>
                    <th>Planilla</th>
                    <th>Cargo</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: 'empleados'
}

</script>