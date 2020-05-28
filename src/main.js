// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import utils from './utils'
import './assets/style/index.css'
import 'leaflet-ellipse/l.ellipse.min'
import 'leaflet-ellipse/l.ellipse'

Vue.prototype.$utils = utils
Vue.config.productionTip = false
Vue.use(L)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
