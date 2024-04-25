<script>
import { RouterLink, RouterView } from 'vue-router'

export default{
    components:{
        RouterLink
    },
    name: 'Header',
    data() {
        return {
            ventana: 1
        }
    },
}
</script>

<template>
  <header class="bg-dark text-white d-flex flex-wrap justify-content-center py-3 px-5 mb-4 border-bottom">
    <RouterLink :to="{name: 'home'}" @click="ventana=1" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <img id="img-footer" alt="logo-footer" class="img-footer" src="https://www.galileo.edu/wp-content/themes/galileo-theme/img/logo-footer.png">
        <h1 class="fs-4 text-white">Gestión de sesiones</h1>
    </RouterLink>
    
    <ul class="fs-4 nav nav-underline">
        <li class="nav-item" @click="ventana=1"><RouterLink :to="{name: 'home'}" class="nav-link text-white" :class="{'active': ventana==1}">Sesiones</RouterLink></li>
        <li class="nav-item" @click="ventana=2"><RouterLink :to="{name: 'estudiantes'}" class="nav-link text-white" :class="{'active': ventana == 2}">Estudiantes</RouterLink></li>
    </ul>
</header>

</template>

<style>
img{
    height: 10vh;
    margin-right: 20px;
}
</style>

