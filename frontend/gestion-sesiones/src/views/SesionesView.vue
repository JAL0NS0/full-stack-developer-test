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
            valido: false
        }
    },
    created() {
        axios.get('http://localhost:4000/sesiones')
        .then((response) => {
            this.sesiones = response.data;
            this.valido = true;
        })
    }
}
</script>