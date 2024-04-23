<script>
    import CardSesion from './CardSesion.vue';

export default{
    name: 'GridSesiones',
    components:{
        CardSesion
    }
}
</script>
<template>
    <div class="container mt-5">
        <h2>Sesiones disponibles:</h2>
        <br>
        <div class="d-flex justify-content-around flex-wrap">
            <CardSesion/>
            <CardSesion/>
            <CardSesion/>
            <CardSesion/>
            <CardSesion/>
            <CardSesion/>
            <CardSesion/>
            <CardSesion/>
            <CardSesion/>
            <CardSesion/>
            <CardSesion/>
            <CardSesion/>
            <CardSesion/>
            <CardSesion/>
        </div>
    </div>
</template>