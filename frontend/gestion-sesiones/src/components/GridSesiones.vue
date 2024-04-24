<script setup>
    import CardSesion from './CardSesion.vue';

    const props = defineProps({
        sesiones: {
            type: Object,
            required: true
        }
    })

</script>
<template>
    <div class="container">
        <div class="d-flex justify-content-center flex-wrap">
            <div v-for="sesion in sesiones" :key="sesion.id">
                <RouterLink :to="{ name: 'sesion', params: { id: sesion.id }}">
                    <card-sesion v-bind:sesion="sesion"></card-sesion>
                </RouterLink>
            </div>
        </div>
    </div>
</template>