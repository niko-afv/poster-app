import Vue from 'vue'
Vue.use(require('@websanova/vue-env'));

export const
    domain_app = Vue.env.get('API_URL'),
    login_uri = Vue.env.get('LOGIN_URL')
;
