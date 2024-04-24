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

    function myalert(valor){
        console.log(valor);
    }

    const nombreDia = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes","Sabado"]
    const nombreMes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octuble", "Noviembre", "Diciembre"]
</script>

<template>
    <div class="card mx-2 my-2 border-secondary shadow-sm" :class="{'text-bg-secondary': activo}" style="width: 10rem;">
        <br>
        <div class="card-body d-flex flex-column m-auto " @click="myalert(fecha)">
            <h5 class="card-title m-auto">{{ nombreDia[fecha.getDay()] }}</h5>
            <p class="card-text m-auto">{{ fecha.getDate() }}</p>
            <p class="card-text m-auto">{{ nombreMes[fecha.getMonth()] }}</p>
        </div>
    </div>
</template>