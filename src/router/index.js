import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import leafletTest01 from '@/components/leaflet-test01'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/test',
      name: 'test',
      component: test
    }, {
      path: '/leafletTest01',
      name: 'leafletTest01',
      component: leafletTest01
    }
  ]
})
