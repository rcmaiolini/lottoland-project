import Vue from 'vue'
import VueRouter from 'vue-router'
import ResultsWinningNumbers from '../views/eurojackpot/ResultsWinningNumbers.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/eurojackpot/results-winning-numbers',
    name: 'results-winning-numbers',
    component: ResultsWinningNumbers
  },
  {
    path: '/',
    redirect: '/eurojackpot/results-winning-numbers'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
