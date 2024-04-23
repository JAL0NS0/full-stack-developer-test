<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="bg-dark text-white d-flex flex-wrap justify-content-center py-3 px-5 mb-4 border-bottom">
    <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <img id="img-footer" alt="logo-footer" class="img-footer" src="https://www.galileo.edu/wp-content/themes/galileo-theme/img/logo-footer.png">
        <span class="fs-4 text-white">Gestión de sesiones</span>
    </a>

    <ul class="nav nav-pills">
        <li class="nav-item"><RouterLink to="/" class="nav-link active">Sesiones</RouterLink></li>
        <li class="nav-item"><RouterLink to="/estudiantes" class="nav-link">Estudiantes</RouterLink></li>
    </ul>
</header>

</template>

<style>
img{
    height: 10vh;
    margin-right: 20px;
}
</style>

