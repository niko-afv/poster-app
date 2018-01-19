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

            <select v-model="account_type" class="selectpicker" data-title="Single Select" data-style="btn-default btn-block" data-menu-style="dropdown-blue">
                <option>Select a type</option>
                <option value="facebook"><i class="fa fa-facebook-official"></i>Facebook Fanpage</option>
                <option value="instagram"><i class="fa fa-instagram"></i>Instagram</option>
            </select>

        </tab-content>
        <tab-content title="Select your account">
            <div v-if="account_type == 'facebook'">
                <div class="">
                    <div class="card">
                        <div class="header">
                            <h4><i class="fa fa-facebook-official"></i> Your Fanpages</h4>
                        </div>
                        <div class="content">
                            <account-list url="http://poster.nicolasfredes.cl/api/fanpages/"></account-list>
                        </div>
                    </div>
                </div>

            </div>

            <div v-else-if="account_type == 'instagram'">
                <div class="card">
                    <div class="header">
                        <h4><i class="fa fa-instagram"></i> Instagram account</h4>
                    </div>
                    <div class="content">
                        <h4>Login</h4>
                        <div class="form-group">
                            <div class="input-group">
                                <input class="form-control" name="username" placeholder="Username"  />
                                <span class="input-group-addon"><i class="fa fa-user"></i></span>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <input class="form-control" name="password" placeholder="******" type="password"  />
                                <span class="input-group-addon"><i class="fa fa-key"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div v-else>
                <div class="card">

                    <div class="content">
                        <div class="alert alert-warning">
                            <span class="glyphicon glyphicon-exclamation-sign"></span> <strong>Something went wrong</strong>
                            <hr class="message-inner-separator">
                            <p>
                                You must select an account type
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </tab-content>
        <tab-content title="Give name and group">
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

    import selectPicker from '../../assets/js/bootstrap-selectpicker'
    import 'vue-form-wizard/dist/vue-form-wizard.min.css'
    Vue.use(VueFormWizard)
    import Vue from 'vue'

    export default {
        name: "wizardCard",
        data() {
            return {
                account_type: 'facebook',
            }
        },
        props :['action'],
        components: {
            VueFormWizard, AccountList
        },
        mounted() {
            $(".selectpicker").selectpicker();
        }

    }
</script>

