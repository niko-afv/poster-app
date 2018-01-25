<template>
    <div id="addAccountStep2">
        <div v-if="this.layout_to_show == 1">
            <div class="">
                <div class="card">
                    <div class="header">
                        <h4><i class="fa fa-facebook-official"></i> Your Fanpages</h4>
                    </div>
                    <div class="content">

                        <fan-pages-select :sendAccount="this.getAccount"></fan-pages-select>
                        <!--
                        <account-list :options="account_list_options"></account-list>
                        -->
                    </div>
                </div>
            </div>

        </div>

        <div v-else-if="this.layout_to_show == 2">
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

        <div v-else="">
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
    </div>
</template>


<script>
    import fanPagesSelect from '../accountInputs/fanpagesSelect.vue'
    import FanPagesSelect from "../accountInputs/fanpagesSelect";

    export default {
        components: {FanPagesSelect},
        name: 'addAccountStep2',
        props : {
            layout_to_show: Number,
            sendAccount: {
                type: Function,
                required: true
            }
        },
        data () {
            return {
                selected_account: null
            }
        },
        methods: {
            getAccount(account){
                this.selected_account= account
            }
        },
        compotents: {
            fanPagesSelect
        },
        watch: {
            selected_account(account){
                this.sendAccount(account)
            }
        }
    }
</script>