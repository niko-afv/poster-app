<template>
    <div id="settlementsContainer" class="content">
        <h2> Liquidaciones</h2>
        <div class="container-fluid">
            <my-section :components="components"></my-section>
        </div>
    </div>
</template>


<script>
    import MySection from '../MySection.vue'
    import SettlementForm from '../forms/SettlementForm.vue'
    import * as Auth from '../../services/auth'

    export default {
        name: 'settlementsContainer',
        data() {
            return {
                components:{
                    SettlementForm
                }
            }
        },
        components: {
            MySection, SettlementForm
        },
        beforeCreate(){
            Auth.initAuth(true)
        }
    }
</script>