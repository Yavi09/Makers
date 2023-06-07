<template>
    <div class="container servicios component-servicio">
        <div class="top">
            <span class="bold">Facturas</span>
            <button type="button" class="btn btn-makers">
                Agregar
            </button>
        </div>
        <table class="table table-dark table-hover">
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Hora</th>
                    <th>Cliente</th>
                    <th>Ordenes</th>                
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
    name : 'facturas'
}

</script>