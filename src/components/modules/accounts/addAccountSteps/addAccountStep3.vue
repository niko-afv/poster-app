<template>
    <div id="addAccountStep3">
        <div class="card">

            <div v-if="this.account_to_show" class="content">
                <div class="row">
                    <div class="col-xs-12 col-sm-4 col-sm-offset-1 col-md-4 col-md-offset-0">
                        <div class="col-lxs-12">
                            <img :src="account_to_show.photo"
                                 class="img-responsive" />
                        </div>
                    </div>


                    <div class="col-xs-12 col-sm-6 col-sm-push">

                        <div class="col-xs-12">
                            <div class="account_info_list text-center">
                                <div class="account_info_item">
                                    <h4>{{ account_to_show.title }}</h4>
                                </div>
                                <div class="account_info_item">
                                    <h3 class="text-muted">{{ account_to_show.type }}</h3>
                                </div>
                            </div>

                            <hr class=""/>
                        </div>

                        <div class="form-group">
                            <input v-model="account_name" class="form-control" placeholder="Type a name" />
                        </div>

                        <div class="form-group">
                            <v-select v-model="selected_group" :options="groups" label="name" :placeholder="'Select your group'"  >
                                <template slot="option" slot-scope="option">
                                    {{ option.name }} [ {{ option.accounts.length }} Cuentas agregadas ]
                                </template>
                            </v-select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import vSelect from 'vue-select'
    import axios from 'axios'
    import * as Api from '../../../../config/api'

    export default {
        name: 'addAccountStep3',
        props: {
            account_to_show: Object,
            sendGroup: {
                type: Function,
                require: true
            },
            sendAccountName: {
                type: Function,
                require: true
            }
        },
        data () {
            return {
                groups: [],
                selected_group: null,
                account_name: null,
                token: this.$ls.get('user_token'),
            }
        },
        components:{
            vSelect
        },
        watch: {
            selected_group(group){
                this.sendGroup(group)
            },
            account_name(name){
                this.sendAccountName(name)
            }
        },
        created(){
            var _self = this
            axios.get(Api.urls.user_groups_list,
                { headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': _self.token
                }
                })
                .then(response => {
                    if(response.data.success){
                        _self.groups = response.data.data.groups
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