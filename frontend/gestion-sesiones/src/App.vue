<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'

export default{
  components: {RouterLink, RouterView, Header},
}
</script>

<template>
  <div>
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

