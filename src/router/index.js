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
    path: '/eurojackpot',
    component: () =>
      import(
        /* webpackChunkName: "eurojackpotmain" */ '../views/eurojackpot/EuroJackpotMain.vue'
      ),
    children: [
      {
        path: '',
        name: 'eurojackpotmain',
        redirect: { name: 'eurojackpot' }
      },
      {
        path: 'eurojackpot',
        name: 'eurojackpot',
        component: () =>
          import(
            /* webpackChunkName: "eurojackpot" */ '../views/eurojackpot/EuroJackpot.vue'
          ),
        meta: {
          breadcrumb: [{ name: 'Euro Jackpot' }]
        }
      },
      {
        path: 'results-winning-numbers',
        name: 'results-winning-numbers',
        component: () =>
          import(
            /* webpackChunkName: "results-winning-numbers" */ '../views/eurojackpot/ResultsWinningNumbers.vue'
          ),
        meta: {
          breadcrumb: [
            { name: 'Euro Jackpot', link: '/eurojackpot' },
            { name: 'Results Winning Numbers' }
          ],
          title: 'EuroJackpot - check the official results and winning numbers'
        }
      },
      {
        path: 'help',
        name: 'help',
        component: () =>
          import(
            /* webpackChunkName: "help" */ '../views/eurojackpot/Help.vue'
          ),
        meta: {
          breadcrumb: [
            { name: 'Euro Jackpot', link: '/eurojackpot' },
            { name: 'Help' }
          ]
        }
      }
    ]
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
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router
