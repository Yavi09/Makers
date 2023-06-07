<style>

</style>

<template>
    <span>{{text}}</span>
</template>
<script>

// exportar componente hijo
export default  {
    // nombre del componente
    name : "dashboard",
    // props que pudiera recibir el componente
    props : {},
    // método que retorna el componente
    data () {
        return {
            text : 'Dashboard de inicio'
        }
    }
}

</script>