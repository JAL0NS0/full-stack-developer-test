<template>
    <select v-if="activo" class="form-select" aria-label="Default select example" v-model="estudiante" @click="$emit('cambioEstudiante', estudiante)">
        <option  v-for="estudiante in estudiantes" :key="estudiante.id" :value="estudiante.id" >
            {{ estudiante.nombre }}
        </option>
    </select>    
</template>
<script>
import axios from 'axios';
export default {
    data(){
        return{
            estudiantes: [],
            estudiante: 0,
            activo: false
        }
    },
    emits:['cambioEstudiante'],
    created(){
        this.loadData()
    },
    methods:{
        loadData(){
            axios.get(import.meta.env.VITE_URL_API+'/estudiantes')
            .then((response) => {
                this.estudiantes = response.data;
                this.activo= true;
            })
        }
    }
}
</script>