import { createRouter, createWebHistory } from 'vue-router'
import SesionesView from '../views/SesionesView.vue'
import EstudiantesView from '@/views/EstudiantesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: SesionesView
    },
    {
      path: '/estudiantes',
      name: 'estudiantes',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/EstudiantesView.vue')
    }
  ]
})

export default router
