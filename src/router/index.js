import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/eurojackpot/results-winning-numbers',
    name: 'results-winning-numbers',
    component: () =>
      import(
        /* webpackChunkName: "results-winning-numbers" */ '../views/eurojackpot/ResultsWinningNumbers.vue'
      )
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
