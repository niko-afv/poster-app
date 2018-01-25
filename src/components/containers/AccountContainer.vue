<template>
    <div id="accountContainer" class="content">
        <div class="container-fluid">
            <h2> Cuentas </h2>
            <my-section :components="components" :options="components"></my-section>
        </div>
    </div>
</template>


<script>
    import MySection from '../MySection.vue'
    import AccountList from '../AccountList.vue'
    import * as Auth from '../../services/auth'
    import * as Config from '../../config/app'

    export default {
        name: 'accountContainer',
        data() {
            return {
                components:[
                    {
                        instance: AccountList,
                        options: {
                            uris:{
                                account_list: Config.domain_app + 'accounts',
                                save_account: Config.domain_app + 'accounts'
                            },
                        }
                    }
                ]
            }
        },
        components: {
            MySection
        }
    }
</script>