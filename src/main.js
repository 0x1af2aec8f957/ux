// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'qc-ui'
import './assets/main.css'
import vw from 'em-vw'
import ux from './components'

Vue.config.productionTip = false
Vue.use(ux)

vw()
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
