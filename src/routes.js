import HomeContainer from './components/HomeContainer.vue'
import BillingContainer from './components/containers/BillingContainer'
import SettlementContainer from './components/containers/SettlementContainer'
import AccountContainer from './components/containers/AccountContainer'
import DashboardContainer from './components/containers/DashboardContainer'
import AppLayout from './components/layout/AppLayout.vue'

import Vue from 'vue'


export const routes = [
    { path: '/', component: AppLayout, name: 'app', redirect: '/home', children : [
        { path: 'settlements', component: SettlementContainer, name: 'settlements', meta: { auth: true }},
        { path: 'billings', component: BillingContainer, name: 'billings', meta: { auth: true } },
        { path: 'accounts', component: AccountContainer, name: 'accounts', meta: { auth: true }},
        { path: 'dashboard' , component: DashboardContainer, name: 'dashboard', meta: { auth: true }}
    ]},
    { path: '/home', component: HomeContainer, name: 'home'},
    { path: '*', redirect: '/home'}
]