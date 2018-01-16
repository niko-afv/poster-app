<template>
    <div id="accountContainer" class="content">
        <div class="container-fluid">
            <h2> Cuentas </h2>
            <my-section :components="components"></my-section>
        </div>
    </div>
</template>


<script>
    import MySection from '../MySection.vue'
    import AccountList from '../AccountList.vue'
    import * as Auth from '../../services/auth'

    export default {
        name: 'accountContainer',
        data() {
            return {
                components:{
                    AccountList
                }
            }
        },
        components: {
            MySection, AccountList
        }
    }
</script>