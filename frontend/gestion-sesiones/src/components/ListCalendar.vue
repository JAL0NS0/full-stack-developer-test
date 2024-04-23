<script setup>
    import CardFecha from './CardFecha.vue';

    const props = defineProps({
        sesiones: {
            type: Object,
            required: true
        }
    })

    var fechas = props.sesiones;

    const timestamps = fechas.map(fecha => fecha.getTime());
    const uniqueTimestamps = [...new Set(timestamps)];
    fechas = uniqueTimestamps.map(timestamp => new Date(timestamp));
</script>

<template>
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
                            <CardFecha v-bind:fecha="fecha"></CardFecha>
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
</template>