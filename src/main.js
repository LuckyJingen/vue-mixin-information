// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import 'normalize.css/normalize.css'
import 'nprogress/nprogress.css'
import 'font-awesome/css/font-awesome.css'
import './style/app.styl'

import '../node_modules/medium-editor/dist/css/medium-editor.css'
import '../node_modules/medium-editor/dist/css/themes/default.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})