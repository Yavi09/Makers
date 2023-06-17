<style>
.mb-24-2vh{
    margin-bottom: 24.2vh;
}
</style>

<template>
    <div class="container servicios component-servicio">
        <div class="top">
            <h5 class="bold">
                Producto sucursal
            </h5>
        </div>
        <hr>
        <div class="container">
            <div class="form-data">
                <span class="bold">
                    Sucursal
                </span>
                <form action="" class="form-2">
                    <label for="" class="form-label">Dirección</label>
                    <select class="form-select mb-3" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </form>
            </div>
            <hr>
            <div class="form-data mb-24-2vh">
                <span class="bold">
                    Producto
                </span>
                <form action="" class="form-2">
                    <label for="" class="form-label">Producto</label>
                    <select class="form-select mb-3" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <div class="mb-3">
                        <label for="" class="form-label">Cantidad</label>
                        <!-- en max obtener la existencias del producto -->
                        <input type="number" class="form-control" id="" min="1" max="">
                    </div>
                </form>
            </div>
            <hr>
            <div class="buttons-reservacion form-data">
                <router-link to="/sucursales/productos" class="btn btn-makers">
                    Cancelar
                </router-link>
                <button type="button" class="btn btn-makers">Agregar</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    // nombre del componente
    name: "crearProductoSucursal",
    // funciones que retornará el componente
    data() {
        return {

        }
    },
    // métodos del componente
    methods: {

    }
}

</script>