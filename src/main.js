import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'

import toRoman from './filters/toRoman'

Vue.use(BootstrapVue)
Vue.filter('toRoman', toRoman)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
