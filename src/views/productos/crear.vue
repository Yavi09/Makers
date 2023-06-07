<style>
.component-render {
    height: 100%;
}


.form-1 {
    width: 100%;
}

.w-25 {
    width: 25%;
}
</style>
<template>
    <div class="container servicios component-servicio component-render">
        <div class="top">
            <h5 class="bold">
                Producto
            </h5>
        </div>
        <hr>
        <div class="container">
            <div class="form-data mb-40vh">
                <form action="" class="form-1">
                    <div class="load">
                        <div class="mb-3 input-container">
                            <label for="nombre" class="form-label">Nombre</label>
                            <input v-model="producto.nombre" type="text" class="form-control" @focus="ValidityState"
                                id="nombre">
                        </div>
                        <div class="mb-3 input-container w-25">
                            <label for="precio" class="form-label">Precio</label>
                            <input v-model="producto.precio" type="text" class="form-control" id="precio">
                        </div>
                        <div class="mb-3 input-container w-25">
                            <label for="existencias" class="form-label">Existencias</label>
                            <input v-model="producto.existencias" min="1" type="number" class="form-control" id="existencias">
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="descripcion" class="form-label">Descripción</label>
                        <input v-model="producto.descripcion" type="text" class="form-control" id="descripcion">
                    </div>
                </form>
                <hr>
            </div>
            <hr>
            <div class="buttons-reservacion form-data">
                <router-link to="/productos" class="btn btn-makers">
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
    name: "crearProducto",
    data() {
        return {
            producto: {
                // entidades de la tabla, que se modificarán desde los inputs
                tipo: 2, //producto
                nombre: '',
                descripcion: '',
                precio: '',
                existencias: '',
                estado: 1
            }
        }
    }
    

}

</script>