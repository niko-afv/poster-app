<template>

    <div id="MyForm" class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">

                    <form-wizard
                            v-if="!saved"
                            title="Account Import"
                            subtitle="Complete all steps to import your account"
                            nextButtonText="Continue"
                            backButtonText="Go back"
                            @on-complete="onComplete"
                    >
                        <tab-content title="Pick an account type">
                            <account-step1 :sendType="this.getType"></account-step1>
                        </tab-content>
                        <tab-content title="Select your account">
                            <account-step2 :layout_to_show="this.selected_account_type" :sendAccount="this.getAccount" ></account-step2>
                        </tab-content>
                        <tab-content title="Give name and group">
                            <account-step3 :account_to_show="this.selected_account" :sendGroup="this.getGroup" :sendAccountName="this.getAccountName" ></account-step3>
                        </tab-content>
                    </form-wizard>

                    <div v-else="">
                        <div class="alert alert-success">
                            <span class="glyphicon glyphicon-ok-sign"></span> <strong>Operation completed successfully</strong>
                            <hr class="message-inner-separator">

                            <br/>

                            <button class="btn btn-social btn-link btn-wd btn-neutral"
                                    v-on:click="this.redirect"
                            >
                                <i class="fa fa-list"></i> See all accounts
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </div>

</template>


<script>
    import FileUploader from '../FileUploader.vue'
    import TextareaUploader from '../TextareaUploader.vue'
    import datePicker from '../DatePicker.vue'
    import VueFormWizard from 'vue-form-wizard'
    import AccountList from '../AccountList.vue'
    import * as Config from '../../config/app'
    import * as Api from '../../config/api'

    import accountStep1 from '../modules/accounts/addAccountSteps/addAccountStep1.vue'
    import accountStep2 from '../modules/accounts/addAccountSteps/addAccountStep2.vue'
    import accountStep3 from '../modules/accounts/addAccountSteps/addAccountStep3.vue'




    import 'vue-form-wizard/dist/vue-form-wizard.min.css'
    Vue.use(VueFormWizard)
    import Vue from 'vue'

    export default {
        name: "wizardCard",
        data() {
            return {
                selected_account_type: null,
                selected_account: null,
                selected_group: null,
                account_name: null,
                token : this.$ls.get('user_token'),
                saved: false
            }
        },
        props :['action'],
        components: {
            VueFormWizard, accountStep1, accountStep2, accountStep3
        },
        methods: {
            getType(type){
                this.selected_account_type = type
            },
            getAccount(account){
                this.selected_account = account
            },
            getGroup(group){
                this.selected_group = group
            },
            getAccountName(account_name){
                this.account_name = account_name
            },
            redirect(){
                this.$router.push('/accounts')
            },
            onComplete: function(){
                var self = this
                var new_acccount = {
                    name: this.account_name,
                    photo: this.selected_account.photo,
                    id: this.selected_account.id,
                    group: this.selected_group.id,
                    account_type: this.selected_account_type
                }

                axios.post(Api.urls.users.accounts.save,
                    new_acccount,
                    { headers: {
                        'Content-type': 'application/json',
                        'Accept': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Authorization': self.token
                    }
                    })
                    .then(response => {
                        if(response.data.success){
                            self.saved = true
                        }else{
                            alert("error")
                        }
                    })
                    .catch(error => {
                        console.log(error)
                    });
            }
        }
    }
</script>