import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Catalog from '../views/Catalog.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path: '/catalog',
    name: 'Catalog',
    component: Catalog
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
