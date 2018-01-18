<template>
    <!--
    <div id="MyForm" class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    -->
    <form-wizard
            title="Account Import"
            subtitle="Complete all steps to import your account"
            nextButtonText="Continue"
            backButtonText="Go back"
            validateOnBack="true"
    >
        <tab-content title="What account kind you want to import?">

            <select class="form-control" v-model="account_type">
                <option value="facebook">Facebook Fanpage</option>
                <option value="instagram">Instagram</option>
            </select>

            <hr/>

            <div v-if="account_type == 'facebook'">
                <div class="">
                    <div class="card">
                        <div class="header">
                            <h4>Your Fanpages</h4>
                        </div>
                        <div class="content">
                            <account-list url="http://poster.test/api/fanpages/"></account-list>
                        </div>
                    </div>
                </div>

            </div>

            <div v-if="account_type == 'instagram'">
                <div class="card">
                    <div class="header">
                        <h4>Login with Instagram account</h4>
                    </div>
                    <div class="content">
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-user"></i></span>
                                <input class="form-control" name="username" placeholder="Username"  />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-key"></i></span>
                                <input class="form-control" name="password" placeholder="******" type="password"  />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </tab-content>
        <tab-content title="Select your account">
            My second tab content
        </tab-content>
        <tab-content title="Set a name">
            Yuhuuu! This seems pretty damn simple
        </tab-content>
    </form-wizard>
    <!--
                </div>
            </div>

        </div>
    </div>
    -->
</template>


<script>
    import FileUploader from '../FileUploader.vue'
    import TextareaUploader from '../TextareaUploader.vue'
    import datePicker from '../DatePicker.vue'
    import VueFormWizard from 'vue-form-wizard'
    import AccountList from '../AccountList.vue'

    import 'vue-form-wizard/dist/vue-form-wizard.min.css'
    Vue.use(VueFormWizard)
    import Vue from 'vue'

    export default {
        name: "wizardCard",
        data() {
            return {
                account_type: 'facebook'
            }
        },
        props :['action'],
        components: {
            VueFormWizard, AccountList
        },
        mounted() {

        }

    }
</script>

