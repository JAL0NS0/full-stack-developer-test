<template>
    <div>
        <contenedor-sesiones v-bind:sesiones="sesiones" />
    </div>
</template>

<script>
import ContenedorSesiones from '../components/ContenedorSesiones.vue';
import axios from 'axios';

export default {
    components: {
        ContenedorSesiones
    },
    name: 'SesionesView',
    
    data() {
        return {
            sesiones: [],
            valido: false,
            guardado: false
        }
    },
    created() {
        if(this.$route.params.id == 1){
            this.guardado=true
        }
        axios.get(import.meta.env.VITE_URL_API+'/sesiones')
        .then((response) => {
            this.sesiones = response.data;
            this.valido = true;
        })
    }
}
</script>