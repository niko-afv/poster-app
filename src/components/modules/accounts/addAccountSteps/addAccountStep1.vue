<template>
    <div id="addAccountStep1">
        <v-select v-model="account_type" :options="account_types" label="title" :placeholder="'Select one account type'">
            <template slot="selected-option" scope="option">
                <span class="fa" :class="option.icon"></span>
                {{ option.title }}
            </template>
            <template slot="option" slot-scope="option">
                <span class="fa" :class="option.icon"></span>
                {{ option.title }}
            </template>
        </v-select>
    </div>
</template>


<script>
    import vSelect from 'vue-select'
    import * as Config from '../../../../config/app'

    export default {
        name: 'addAccountStep1',
        props: {
            sendType : {
                type: Function,
                required: true
            }
        },
        data () {
            return {
                account_type: null,
                account_types: [],
                urls: {
                    account_types: Config.domain_app + 'accounttypes',
                    account_types: Config.domain_app + 'accounttypes'
                },


                token : this.$ls.get('user_token')
            }
        },
        components: {
            vSelect
        },
        watch: {
            account_type: function (selectedType) {
                this.sendType((selectedType != null)?selectedType.id:0)
            }
        },
        created: function () {
            var self = this;

            axios.get(this.urls.account_types,
                { headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': self.token
                }
                })
                .then(response => {

                    if(response.data.success){
                        var types = [];
                        response.data.data.accounttypes.forEach(function (type) {
                            types.push({
                                id: type.id,
                                title : type.name,
                                icon: type.icon
                            })
                        });
                        self.account_types = types

                    }
                })
                .catch(error => {
                    console.log(error)
                });
        }
    }
</script>