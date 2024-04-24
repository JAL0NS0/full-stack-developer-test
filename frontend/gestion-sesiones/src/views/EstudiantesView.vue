<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <button-back></button-back>
            </div>
        </div>
        <div class="row col-5 m-auto" >
            <ListEstudiantes v-if="valido" v-bind:estudiantes="estudiantes" />
        </div>
    </div>
</template>

  
<script>
import ButtonBack from '@/components/ButtonBack.vue';
import ListEstudiantes from '@/components/ListEstudiantes.vue';

export default {
    components: {
        ListEstudiantes,
        ButtonBack
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
            await fetch( import.meta.env.VITE_URL_API+'/estudiantes').then(response => response.json()).then(data => this.estudiantes = data);
            this.valido = true;
        }        
    }
}
</script>