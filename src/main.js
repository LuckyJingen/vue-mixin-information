// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import nprogress from 'nprogress'

import 'normalize.css/normalize.css'
import 'nprogress/nprogress.css'
import 'font-awesome/css/font-awesome.css'
import './style/app.styl'

import '../node_modules/medium-editor/dist/css/medium-editor.css'
import '../node_modules/medium-editor/dist/css/themes/default.css'

Vue.config.productionTip = false

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

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})