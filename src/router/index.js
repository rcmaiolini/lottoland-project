import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/powerball',
    name: 'powerball',
    component: () =>
      import(/* webpackChunkName: "powerball" */ '../views/PowerBall.vue')
  },
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
  },
  {
    path: '/euromillions',
    name: 'euromillions',
    component: () =>
      import(/* webpackChunkName: "euromillions" */ '../views/EuroMillions.vue')
  },
  {
    path: '/lotteries',
    name: 'lotteries',
    component: () =>
      import(/* webpackChunkName: "lotteries" */ '../views/MoreJackpots.vue')
  },
  {
    path: '/promotions',
    name: 'promotions',
    component: () =>
      import(/* webpackChunkName: "promotions" */ '../views/Promotions.vue')
  },
  {
    path: '/scratchcards',
    name: 'scratchcards',
    component: () =>
      import(/* webpackChunkName: "scratchcards" */ '../views/Scratchcards.vue')
  },
  {
    path: '/instantwin',
    name: 'instantwin',
    component: () =>
      import(/* webpackChunkName: "instantwin" */ '../views/InstantWin.vue')
  },
  {
    path: '/games',
    name: 'games',
    component: () =>
      import(/* webpackChunkName: "games" */ '../views/Games.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
