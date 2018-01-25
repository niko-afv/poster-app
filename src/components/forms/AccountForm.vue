<template>

    <div id="MyForm" class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-10 col-md-offset-1">

    <form-wizard
            title="Account Import"
            subtitle="Complete all steps to import your account"
            nextButtonText="Continue"
            backButtonText="Go back"
    >
        <tab-content title="Pick an account type">
            <account-step1 :sendType="this.getType"></account-step1>
        </tab-content>
        <tab-content title="Select your account">
            <account-step2 :layout_to_show="this.selected_account_type" :sendAccount="this.getAccount" ></account-step2>
        </tab-content>
        <tab-content title="Give name and group">
            <account-step3 :account_to_show="this.selected_account"></account-step3>
        </tab-content>
    </form-wizard>

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
                token : this.$ls.get('user_token')
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
            }
        }
    }
</script>

