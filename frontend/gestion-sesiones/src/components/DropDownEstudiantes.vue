<template>
    <select v-if="activo" class="form-select" aria-label="Default select example">
        <option selected>Seleccione Estudiante</option>
        <option v-for="estudiante in estudiantes" :key="estudiante.id" :value="estudiante">
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
            activo: false
        }
    },
    created(){
        this.loadData()
    },
    methods:{
        loadData(){
            axios.get(import.meta.env.VITE_URL_API+'/estudiantes')
            .then((response) => {
                console.log(response)
                this.estudiantes = response.data;
                this.activo= true;
            })
        }
    }
}
</script>