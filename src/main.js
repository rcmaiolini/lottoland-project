import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue } from 'bootstrap-vue'

import vueNumeralFilter from 'vue-numeral-filter'
import toRoman from './filters/toRoman'
import Nl2br from 'vue-nl2br'
import moment from 'moment'

Vue.use(BootstrapVue)
Vue.use(vueNumeralFilter)
Vue.filter('toRoman', toRoman)
Vue.component('nl2br', Nl2br)

Vue.prototype.moment = moment

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
