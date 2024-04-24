<template>
    <div class="card m-1" style="min-width: 15rem;">
        <div class="card-body d-flex flex-column m-auto">
            <h5 class="card-title m-auto">{{ nombre }}</h5>
            <p class="card-text m-auto">8:00 a 10:00</p>
            <p class="card-text m-auto">Cupo: 10</p>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        sesion: {
            type: Object,
            required: true
        }
    })

    const nombre = props.sesion.nombre
    const inicio = new Date(props.sesion.start_datetime);
    const fin = props.sesion.end_datetime
    const cupo = props.sesion.cupo
</script>