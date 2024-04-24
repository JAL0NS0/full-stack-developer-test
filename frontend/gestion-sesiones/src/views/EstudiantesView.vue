<template>
    <div class="container">
        <ListEstudiantes v-if="valido" v-bind:estudiantes="estudiantes" />
    </div>
</template>

  
<script>
import ListEstudiantes from '@/components/ListEstudiantes.vue';

export default {
    components: {
        ListEstudiantes
    },
    name: 'EstudiantesView',
    
    data() {
        return {
            estudiantes: [],
            valido: false
        }
    },
    mounted() {
        this.loadData();     
    },
    methods: {
        async loadData(){
            await fetch('http://localhost:4000/estudiantes').then(response => response.json()).then(data => this.estudiantes = data);
            this.valido = true;
        }        
    }
}
</script>