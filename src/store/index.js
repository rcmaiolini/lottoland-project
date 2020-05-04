import Vue from 'vue'
import Vuex from 'vuex'

import * as loading from './modules/loading'
import * as eurojackpot from './modules/euro-jackpot'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    loading,
    eurojackpot
  }
})
