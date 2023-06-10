<template>
    <!-- <div class="main"> -->
        <div class="container tipos component-servicio">
            <span class="bold">
                Tipos de servicios
            </span>
            <button type="button" class="btn btn-makers">
                Ver
            </button>
        </div>        

        <div class="container servicios component-servicio">
            <div class="top">
                <span class="bold">Servicios</span>
                <router-link to="/servicios/crear" type="button" class="btn btn-makers">
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
    name : 'servicios'
}

</script>
<style>
.tipos{
    background: #231F1E;
    padding: .7% .9%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.bold{
    font-weight: bold;
}
.top{
    padding: 1%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.servicios{
    background: #231F1E;
    padding: 0 .5%;
}
.main{
    display: flex;
    flex-direction: column;
    gap: 5%;
}

.component-servicio{
    margin-top: 2.5%;
    border-radius: 7px;
}
.btn-makers{
    background: #393534;    
    color: white;
}
.btn-makers:hover{
    background: #504c4a;    
}
.btn-makers:active{
    border-color: #b4b0af !important;
    color: #b4b0af !important;
}
.table > :not(caption) > * > *{
    background: #504c4a;
}
th:first-child{
    border-radius: 7px 0 0 0;
}
th:last-child{
    border-radius: 0 7px 0 0;
}
</style>