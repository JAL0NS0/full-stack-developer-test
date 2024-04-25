<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <button-back></button-back>
            </div>
        </div>
        <div class="row">
            <div class="col justify-content-center d-flex">
                <asignacion :sesion="sesion"></asignacion>
            </div>
        </div>
    </div>

</template>
<script>
import ButtonBack from '@/components/ButtonBack.vue';
import axios from 'axios';
import { RouterLink, RouterView } from 'vue-router'
import Asignacion from '../components/Asignacion.vue';

export default {
    components: {
        RouterLink,
        ButtonBack,
        Asignacion
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