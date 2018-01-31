<template>
    <div id="fanPagesSelect">
        <v-select v-model="selected_account" :options="fb_account_list" label="title" :placeholder="'Select your fanpage'"  >
            <template slot="selected-option" slot-scope="option">
                <img :src="option.photo" width="20" />
                {{ option.title }}
            </template>
            <template slot="option" slot-scope="option">
                <img :src="option.photo" width="25" />
                {{ option.title }}
            </template>
        </v-select>
    </div>
</template>


<script>
    import vSelect from 'vue-select'
    import * as Api from '../../../../config/api'

    export default {
        name: 'fanPagesSelect',
        props: {
            sendAccount : {
                type: Function,
                required: true
            }
        },
        data () {
            return {
                selected_account: null,
                fb_account_list: [],
                urls:{
                    account_list: Api.urls.users.fanpages.list,
                },

                token: this.$ls.get('user_token')
            }
        },
        watch: {
            selected_account(account){
                this.sendAccount(account)
            }
        },
        created: function () {
            var self = this;
            console.log(this.urls.account_list)
            axios.get(this.urls.account_list,
                { headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': self.token
                }
                })
                .then(response => {

                    if(response.data.success){
                        var accounts = [];
                        response.data.data.accounts.forEach(function (account) {
                            accounts.push({
                                id: account.id,
                                title : account.name,
                                photo: account.photo
                            })
                        });
                        self.fb_account_list = accounts

                    }
                })
                .catch(error => {
                    console.log(error)
                });
        },
        components: {
            vSelect
        }
    }
</script>