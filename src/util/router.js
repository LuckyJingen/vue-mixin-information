import Vue from 'vue'
import Router from 'vue-router'
import nprogress from './nprogress'

Vue.use(Router)

const router = new Router()

// add nprogress to Route
router.beforeEach((to, from, next) => {
    nprogress.start()
    next()
  })
  router.afterEach(() => {
    nprogress.inc()
    setTimeout(() => {
        nprogress.done()
    }, 600)
  })

  export default router