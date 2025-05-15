import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Portfolio from './views/Portfolio.vue'

Vue.use(Router)

export default new Router({
  routes:[
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      // component: Portfolio
      beforeEnter(to, from, next) {
        window.location.replace("https://docs.google.com/presentation/d/e/2PACX-1vTK-wTkoEjVYkSWdRy28niM_oLasIRccJshBnRID2zoV9ZLbB13mi_pPiiQLbhUMVA_3QZdQB4lY20N/pub?start=false&loop=false&delayms=60000")
      }
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    // https://router.vuejs.org/guide/advanced/scroll-behavior.html
    if (to.hash) {
      return { selector: to.hash }
    } else if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
