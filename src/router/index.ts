import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Services from '@/views/Services.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    // By default, go to
    path: '*',
    redirect: '/services'
  },
  {
    path: '/services',
    name: 'Dienste',
    component: Services
  },
  {
    path: '/employees',
    name: 'Mitarbeiter',
    component: () => import('../views/Employees.vue')
  },
  {
    path: '/technologies',
    name: 'Technologien',
    component: () => import('../views/Technologies.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
