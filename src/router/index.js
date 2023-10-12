import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import welcome from '../views/WelcomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
  ]
})

export default router
