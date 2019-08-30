import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import Geo2LayerLoader from '@/views/Geo2LayerLoader'
// import GeoEventsLoader from '@/views/GeoEventsLoader'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/Geo2LayerLoader',
      name: 'Geo2LayerLoader',
      component: () => import('./views/Geo2LayerLoader.vue')
    },
    {
      path: '/GeoEventsLoader',
      name: 'GeoEventsLoader',
      component: () => import('./views/GeoEventsLoader.vue')
    }
  ]
})
