<style>
.info-orden{
    margin-bottom: 26.5vh;
}
</style>
<template>
    <div class="container servicios component-servicio">
        <div class="top">
            <h5 class="bold">
                Orden
            </h5>
        </div>
        <hr>
        <div class="container">
            <div class="form-data">
                <span class="bold">
                    Cliente
                </span>
                <form action="" class="form-2">
                    <label for="">DUI</label>
                    <select class="form-select mb-3" aria-label="Default select example">
                        <option selected>Open this select menu</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <div class="load">
                        <div class="mb-3 input-container">
                            <label for="nombres" class="form-label">Nombres</label>
                            <input type="text" class="form-control" @focus="ValidityState" id="nombres"
                             readonly>
                        </div>
                        <div class="mb-3 input-container">
                            <label for="apellidos" class="form-label">Apellidos</label>
                            <input type="text" class="form-control" id="apellidos" readonly>
                        </div>
                    </div>
                </form>
            </div>
            <hr>
            <div class="form-data info-orden">
                <span class="bold">
                    info. Orden
                </span>
                <form action="" class="form-2 flex wp sp-bet">
                    <div class="mb-3 flex-col input-container">
                        <label for="">Fecha</label>
                        <input type="date" name="" id="" class="form-control">
                    </div>
                    <div class="mb-3 flex-col input-container">
                        <label for="">Hora</label>
                        <input type="time" name="" id="" class="form-control">
                    </div>
                </form>
            </div>
            <hr>
            <div class="buttons-reservacion form-data">
                <router-link to="/reservaciones" class="btn btn-makers">
                    Cancelar
                </router-link>
                <button type="button" class="btn btn-makers">Agregar</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'facturas'
}

</script>