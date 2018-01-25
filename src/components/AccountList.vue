<template>
    <div>
        <div v-for="account in this.accounts" class="col-md-4 visible-xs">
            <div class="card">
                <div class="header text-center">
                    <h4 class="title">{{ account.name }}</h4>
                    <p class="category">{{ account.category }}</p>
                </div>
                <div class="content text-center">
                    <div class="img-container">
                        <img :src="account.photo" :alt="account.name + ' picture'">
                    </div>
                </div>
                <div class="footer">
                    <div class="legend">
                        <i class="fa fa-clock-o"></i> account created at 2016 Jan 15
                    </div>
                    <hr>
                    <div class="stats">
                        <button type="button" v-on:click="saveAccount" rel="tooltip" data-placement="left" title="Edit Post" class="btn btn-success btn-fill btn-simple ">
                            <i class="fa fa-link"></i> Link
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>


        <table v-if="accounts.length" class="table table-bigboy hidden-xs">
            <thead>
            <tr>
                <th class="text-center">Picture</th>
                <th >Account Name</th>
                <th v-if="show_type" class="th-description">Type</th>
                <th>Vincular</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="account in accounts">
                <td>
                    <div class="img-container">
                        <img :src="account.photo" :alt="account.name + ' picture'" width="40%">
                    </div>
                </td>
                <td class="td-name">
                    {{ account.name }}
                </td>
                <td v-if="show_type">
                    Facebook
                </td>
                <td class="td-actions">
                    <!--
                    <button type="button" rel="tooltip" data-placement="left" title="View Post" class="btn btn-info btn-simple btn-icon">
                        <i class="fa fa-unlink"></i>
                    </button>
                    -->
                    <button type="button" v-on:click="saveAccount(account)" rel="tooltip" data-placement="left" title="Edit Post" class="btn btn-success btn-fill btn-simple ">
                        <i class="fa fa-link"></i> Link
                    </button>
                </td>
            </tr>
            </tbody>
        </table>


        <div v-else="" style="margin-top: 10px;">
            <div class="card">

                <div class="content">
                    <div class="alert alert-danger">
                        <span class="glyphicon glyphicon-exclamation-sign"></span> <strong>Something went wrong</strong>
                        <hr class="message-inner-separator">
                        <p>
                            No content to show
                        </p>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>


<script>
    import axios from 'axios';
    import VueLocalStorage from 'vue-ls';

    export default {
        name: "AccountList",
        data () {
            return {
                show_type: false,
                accounts: []
            }
        },
        props : ['uris','options'],
        methods: {
            saveAccount(account){
                console.log(account);

                axios.post(this.options.uris.save_account,
                    {
                        id: account.id,
                        name: account.name,
                        category:account.category,
                        photo: account.photo,
                        user_id: this.$ls.get('user_id'),
                        account_type: null,
                        account_token: account.token
                    },
                    { headers: {
                        'Content-type': 'application/json',
                        'Accept': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Authorization': this.$ls.get('user_token')
                    }
                    })
                    .then(response => {
                        if(response.data.success){
                            console.log(response.data)
                        }
                        //this.postResults.push(response);
                    })
                    .catch(error => {
                        console.log(error)
                        //this.postResults.push(error);
                    });
            }
        },
        created: function () {
            var user_id = this.$ls.get('user_id');
            var token = this.$ls.get('user_token');
            console.log(token);
            var self = this;

            axios.get(this.options.uris.account_list,
                { headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': token
                }
                })
                .then(response => {
                    if(response.data.success){
                        console.log(response.data.data.accounts)
                        self.accounts = response.data.data.accounts
                    }
                    //this.postResults.push(response);
                })
                .catch(error => {
                    console.log(error)
                    //this.postResults.push(error);
                });
        }
    }
</script>