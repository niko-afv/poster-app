<template>
    <div id="billingContainer" class="content">
        <div class="container-fluid">
            <h2> Facturas</h2>
            <my-section :components="components"></my-section>
        </div>
    </div>
</template>

<script>
    import MySection from '../MySection.vue'
    import BillingForm from '../forms/BillingForm.vue'
    import * as Auth from '../../services/auth'
    export default {
        name: 'billingContainer',
        data() {
            return {
                components:{
                    BillingForm
                }
            }
        },
        components: {
            MySection, BillingForm
        },
        beforeCreate(){
            Auth.initAuth(true)
        }
    }
</script>