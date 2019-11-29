import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
    },
    {
      path: '/GeoStaticJapanLoader',
      name: 'GeoStaticJapanLoader',
      component: () => import('./views/GeoStaticJapanLoader.vue')
    },
    {
      path: '/GeoStaticEuropeLoader',
      name: 'GeoStaticEuropeLoader',
      component: () => import('./views/GeoStaticEuropeLoader.vue')
    },
    {
      path: '/GeoStaticUSLoader',
      name: 'GeoStaticUSLoader',
      component: () => import('./views/GeoStaticUSLoader.vue')
    },
    {
      path: '/GeoLeafLoader',
      name: 'GeoLeafLoader',
      component: () => import('./views/GeoLeafLoader.vue')
    }
  ]
})
