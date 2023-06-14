<style>
.w-45{
    width: 45%;
}
.mb-30vh{
    margin-bottom: 30vh;
}
</style>
<template>
    <div class="container servicios component-servicio component-render">
        <div class="top">
            <h5 class="bold">
                Sucursal
            </h5>
        </div>
        <hr>
        <div class="container agg-servicio">
            <div class="form-data mb-30vh">
                <form action="" class="form-1">
                    <div class="mb-3">
                        <label for="direccion" class="form-label">Direccion</label>
                        <input type="text" class="form-control" id="nombre">
                    </div>
                    <div class="load">
                        <div class="mb-3 input-container">
                            <label for="nit" class="form-label">NIT</label>
                            <input type="text" class="form-control" id="nit" required>
                        </div>
                        <div class="mb-3 input-container">
                            <label for="nrc" class="form-label">NRC</label>
                            <input type="email" class="form-control" id="nrc">
                        </div>
                    </div>
                    <div class="load">
                        <div class="mb-3 input-container">
                            <label for="telefono" class="form-label">Teléfono</label>
                            <input type="text" class="form-control" id="telefono" required>
                        </div>
                        <div class="mb-3 flex-col input-container">
                            <label for="hora" class="form-label">Hora</label>
                            <div class="load">
                                <input type="time" name="" id="apertura" class="form-control w-45">
                                <input type="time" name="" id="cierre" class="form-control w-45">
                            </div>
                        </div>
                    </div>
                </form>
                <hr>
            </div>
            <hr>
            <div class="buttons-reservacion buttons-servicio form-data">
                <router-link to="/sucursales" class="btn btn-makers">
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
    name: "crearSucursal",
    data() {
        return {

        }
    }
}

</script>