import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import jQuery from 'jquery'
import { routes } from './routes.js'

global.jQuery = jQuery
global.$ = jQuery


let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/light-bootstrap-dashboard.css'
import './assets/css/pe-icon-7-stroke.css'
import 'font-awesome/css/font-awesome.css'


import * as Auth from './services/auth'

Vue.use(VueRouter)

const router = new VueRouter({
    routes,
    mode: 'history'
})

router.beforeEach((to, from, next) => {
    var auth = to.meta.auth
    if(auth) {
        Auth.initAuth(true)
        next()
    }else{
        next()
    }
})


var vm = new Vue({
    el: '#app',
    router,
    components: {App},
    render: h => h(App)
}).$mount('#app')

global.vm = vm

vm.show = false