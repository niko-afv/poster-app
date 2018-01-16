import Vue from 'vue'
import VueKeycloak from 'vue-keycloak'
import VueSession from 'vue-session'
Vue.use(VueSession)


export function initAuth(redirect) {
    Vue.use(VueKeycloak, {
        keycloakOptions: {
            "realm": "master",
            "url": "http://172.16.61.51/auth",
            "clientId": "adminus",
            "public-client": true,
            "credentials": {
                "secret": '94a0e0ff-82bf-41f0-b57d-2541ef718bc3'
            }
        },
        keycloakInitOptions: {
            //onLoad: 'check-sso'
            //onLoad: 'login-required'
            onLoad: (redirect)?'login-required':'check-sso'
        }
    })
}