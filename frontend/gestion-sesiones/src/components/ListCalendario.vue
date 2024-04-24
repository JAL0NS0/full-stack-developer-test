<script>
    import { ref } from 'vue';
    import CardFecha from './CardFecha.vue';

    export default{
        components: {
            CardFecha
        },
        props:{
            fechas: {
                type: Object,
                required: true
            }
        },
        emits:['cambioFecha']
    }
</script>

<template>
    <div>
        <div class="container d-flex">
            <button type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="d-flex flex-wrap justify-content-around">
                            <div v-for="(fecha, index) in fechas" :key="index">
                                    <CardFecha v-bind:fecha="new Date(fecha)" @click="$emit('cambioFecha', fecha)"></CardFecha>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>
</template>