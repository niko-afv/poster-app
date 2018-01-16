import HomeContainer from './components/HomeContainer.vue'
import AccountContainer from './components/containers/AccountContainer'
import DashboardContainer from './components/containers/DashboardContainer'
import AppLayout from './components/layout/AppLayout.vue'

import Vue from 'vue'

export const routes = [
    { path: '/:user_id/:token', component: AppLayout, name: 'app',/* redirect: '/home',*/ meta: {verify:true}},
    { path: '/', component: AppLayout, name: 'app',/* redirect: '/home',*/ meta: {}, children : [
        { path: '/dashboard' , component: DashboardContainer, name: 'dashboard', meta: { auth: false }},
        { path: '/accounts' , component: AccountContainer, name: 'accounts', meta: { auth: false }},
    ]},
    { path: '/home', component: HomeContainer, name: 'home'},
    { path: '*', redirect: '/home'}
]