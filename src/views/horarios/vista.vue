<template>
    <div class="container servicios component-servicio">
        <div class="top">
            <span class="bold">Horarios</span>
            <button type="button" class="btn btn-makers">
                Agregar
            </button>
        </div>
        <table class="table table-dark table-hover">
            <thead>
                <tr>
                    <th>Apertura</th>
                    <th>Cierre</th>
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
export default {
    name : 'horarios'
}

</script>