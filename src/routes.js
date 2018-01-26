import HomeContainer from './components/HomeContainer.vue'
import AccountContainer from './components/containers/AccountContainer'
import AccountForm from './components/forms/AccountForm.vue'
import GroupContainer from './components/containers/GroupContainer.vue'
import GroupForm from './components/forms/GroupForm.vue'
import DashboardContainer from './components/containers/DashboardContainer'
import AppLayout from './components/layout/AppLayout.vue'

export const routes = [
    { path: '/', component: AppLayout, name: 'app', redirect: '/home', meta: {}, children : [
        { path: '/dashboard' , component: DashboardContainer, name: 'dashboard', meta: { auth: true }},
        { path: 'accounts' , component: AccountContainer, name: 'accounts', meta: { auth: true }},
        {path: 'accounts/add', component: AccountForm, name: 'account_add', meta: { auth: true }},
        { path: 'groups' , component: GroupContainer, name: 'groups', meta: { auth: true }},
        {path: 'groups/add', component: GroupForm, name: 'group_add', meta: { auth: true }}
    ]},
    { path: '/:user_id/:token', component: AppLayout, name: 'out',/* redirect: '/home',*/ meta: {verify:true}},
    { path: '/home', component: HomeContainer, name: 'home'},
    { path: '*', redirect: '/home'}
]