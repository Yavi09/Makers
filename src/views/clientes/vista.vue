<template>
    <div class="container servicios component-servicio">
        <div class="top">
            <span class="bold">Clientes</span>
            <router-link to="/clientes/crear" type="button" class="btn btn-makers">
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
    name : 'clientes'
}

</script>