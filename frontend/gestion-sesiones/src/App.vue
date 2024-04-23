<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
</script>

<template>
  
  <Header />
  <div class="contenido">
    <RouterView />
  </div>
  
</template>

<style scoped>
  .contenido{
    width: 90%;
    margin: auto;
  }
</style>
