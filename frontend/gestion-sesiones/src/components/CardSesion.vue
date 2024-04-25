<template>
    <div class="card m-1" style="min-width: 15rem;">
        <div class="card-body d-flex flex-column m-auto">
            <h5 class="card-title m-auto">{{ sesion.nombre }}</h5>
            <p class="card-text m-auto">
                {{ inicio.toLocaleTimeString("es-US",{ hour12:false, hour:'numeric', minute:'2-digit' }) }}
                -
                {{ fin.toLocaleTimeString("es-US",{ hour12:false, hour:'numeric', minute:'2-digit' }) }}
            </p>
            <p class="card-text m-auto">Cupo: {{ sesion.disponible }}</p>
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
    const inicio = new Date(props.sesion.start_datetime);
    const fin = new Date(props.sesion.end_datetime);
    const cupo = props.sesion.cupo
</script>