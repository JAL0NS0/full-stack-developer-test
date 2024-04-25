<script setup>
    const props = defineProps({
        fecha: {
            type: Date,
            required: true
        },
        activo: {
            type: Boolean,
            default: false
        }
    })
</script>

<template>
    <div class="card mx-2 my-2 border-secondary shadow-sm" :class="{'text-bg-secondary': activo}" style="width: 10em;">
        <br>
        <div class="card-body d-flex flex-column m-auto ">
            <h5 class="card-title m-auto">{{ fecha.toLocaleDateString("es-US",{weekday:'long' })}}</h5>
            <p class="card-text m-auto">{{ fecha.getDate() }}</p>
            <p class="card-text m-auto">{{ fecha.toLocaleDateString("es-Us", {month:'long'}) }}</p>
        </div>
    </div>
</template>

<style>
    .card{
        cursor: pointer;
    }
</style>