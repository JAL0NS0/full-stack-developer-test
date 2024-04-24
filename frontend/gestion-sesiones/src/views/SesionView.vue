<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <button-back></button-back>
            </div>
        </div>
        <h1>Sesion {{ $route.params.id }}</h1>
        <h2>{{ sesion.nombre }}</h2>
    </div>

</template>
<script>
import ButtonBack from '@/components/ButtonBack.vue';
import ContenedorSesiones from '../components/ContenedorSesiones.vue';
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router'

export default {
    components: {
        ContenedorSesiones,
        RouterLink,
        ButtonBack
    },
    name: 'SesionesView',
    
    data() {
        return {
            sesion: {},
            valido: false
        }
    },
    created() {
        axios.get(import.meta.env.VITE_URL_API+'/sesiones/'+this.$route.params.id)
        .then((response) => {
            this.sesion = response.data;
            this.valido = true;
        })
    }
}
</script>