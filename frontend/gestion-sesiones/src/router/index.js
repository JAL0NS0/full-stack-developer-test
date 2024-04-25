import { createRouter, createWebHistory } from 'vue-router'
import SesionesView from '../views/SesionesView.vue'
import EstudiantesView from '@/views/EstudiantesView.vue'
import SesionView from '@/views/SesionView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:id?',
      name: 'home',
      component: SesionesView
    },
    {
      path: '/estudiantes',
      name: 'estudiantes',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: EstudiantesView
    },
    {
      path: '/sesion/:id',
      name: 'sesion',
      component: SesionView
    },
  ]
})

export default router
