import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import jQuery from 'jquery'
import { routes } from './routes.js'
import axios from 'axios';
import VueLocalStorage from 'vue-ls';


global.jQuery = jQuery
global.$ = jQuery

let Bootstrap = require('bootstrap')
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/light-bootstrap-dashboard.css'
import './assets/css/pe-icon-7-stroke.css'
import 'font-awesome/css/font-awesome.css'

import * as Auth from './services/auth'

Vue.use(VueRouter)

var options = {
    namespace: 'poster__'
};

Vue.use(VueLocalStorage, options);

const router = new VueRouter({
    routes,
    mode: 'history'
})

var app = this

router.beforeEach((to, from, next) => {
    var auth = to.meta.auth
    var verify = to.meta.verify

    if(verify) {
        console.log(to.params)
        axios.post('http://poster.test/api/authenticate',
        {
            user_id: to.params.user_id,
            token: to.params.token,
        }, // the data to post
        { headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*',
        }
        })
        .then(response => {
            if(response.data.success){
                Vue.ls.set('user_id', to.params.user_id,1000*60*60);
                Vue.ls.set('user_token', to.params.token,1000*60*60);
                router.push('/dashboard');
            }
            //this.postResults.push(response);
        })
        .catch(error => {
            console.log(error)
            //this.postResults.push(error);
        });
        return
    }
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