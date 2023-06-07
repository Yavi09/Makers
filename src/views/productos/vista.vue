<template>
    <!-- <div class="main"> -->  
        <div class="container servicios component-servicio">
            <div class="top">
                <span class="bold">Productos</span>
                <router-link to="/productos/crear" type="button" class="btn btn-makers">
                Agregar
            </router-link>
            </div>
            <table class="table table-dark table-hover">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Tipo de servicio</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                        <th>Existencias</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    <!-- </div> -->
</template>
<script>
export default {
    name : 'productos'
}

</script>