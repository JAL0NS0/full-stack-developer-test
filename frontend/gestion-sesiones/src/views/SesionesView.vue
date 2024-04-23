<script setup>
    import ListCalendar from '../components/ListCalendar.vue';
    import GridSesiones from '../components/GridSesiones.vue';
    import axios from 'axios';  
    import { onMounted } from 'vue';

    const sesiones = [
  {
    "id": 80,
    "nombre": "Fisica I",
    "start_datetime": "2024-04-16T08:00:00.000Z",
    "end_datetime": "2024-04-16T10:00:00.000Z",
    "cupo": 10
  },
  {
    "id": 81,
    "nombre": "Electronica IV",
    "start_datetime": "2024-04-16T18:00:00.000Z",
    "end_datetime": "2024-04-16T19:00:00.000Z",
    "cupo": 20
  },
  {
    "id": 82,
    "nombre": "Matematica III",
    "start_datetime": "2024-04-16T11:00:00.000Z",
    "end_datetime": "2024-04-16T13:00:00.000Z",
    "cupo": 15
  }
]

    const fechas = [];
    function guardarfechas() {
        var aux_date;
        for(var i = 0; i < sesiones.length; i++){
            aux_date = new Date(sesiones[i].start_datetime)
            fechas.push(new Date(aux_date.getFullYear()+"-"+aux_date.getMonth()+"-"+aux_date.getDate()))
        }
        fechas.sort((x,y) =>{
            return x > y ? 1 : -1
        })
    }

    guardarfechas()
</script>

<template>
    {{ fechas }}
    <div>
        <ListCalendar v-bind:sesiones="fechas" /> 
        <GridSesiones/>
    </div>
</template>