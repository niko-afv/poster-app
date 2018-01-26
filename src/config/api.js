import Vue from 'vue'
import VueLocalStorage from 'vue-ls';


var options = {
    namespace: 'poster__'
};

Vue.use(VueLocalStorage, options);
Vue.use(require('@websanova/vue-env'));


export const
    api_doamin = Vue.env.get('API_URL'),
    urls = {
        user_groups_list: api_doamin + 'users/' + Vue.ls.get('user_id') + '/groups',
        users: {
            accounts: {
                save: api_doamin + 'users/' + Vue.ls.get('user_id') + '/accounts',

            }
        }
    }
;
