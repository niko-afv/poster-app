import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import jQuery from 'jquery'
import { routes } from './routes.js'
import axios from 'axios';
import VueLocalStorage from 'vue-ls';
import * as Config from './config/app'

Vue.use(require('@websanova/vue-env'));

global.jQuery = jQuery
global.$ = jQuery
global.axios = axios
global._config = Config

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
        axios.post(Config.domain_app+ 'authenticate',
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
            }else{
                console.warn('An error has ocurred: ' + response.data.message)
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
        var user_id = Vue.ls.get('user_id', null);
        var token = Vue.ls.get('user_token', null);
        if(user_id == null || token == null){
            router.push('/home');
        }
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