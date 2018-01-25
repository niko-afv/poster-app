<template>
    <div id="addAccountStep3">
        <div class="card">

            <div v-if="this.account_to_show" class="content">
                <div class="row">
                    <div class="col-xs-12 col-sm-4 col-sm-offset-1 col-md-4 col-md-offset-0">
                        <div class="col-lxs-12">
                            <img :src="account_to_show.photo"
                                 class="img-responsive" />
                        </div>
                    </div>


                    <div class="col-xs-12 col-sm-6 col-sm-push">

                        <div class="col-xs-12">
                            <div class="account_info_list text-center">
                                <div class="account_info_item">
                                    <h4>{{ account_to_show.title }}</h4>
                                </div>
                                <div class="account_info_item">
                                    <h3 class="text-muted">{{ account_to_show.type }}</h3>
                                </div>
                            </div>

                            <hr class=""/>
                        </div>

                        <div class="form-group">
                            <input class="form-control" placeholder="Type a name" />
                        </div>

                        <div class="form-group">
                            <v-select></v-select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
    import vSelect from 'vue-select'

    export default {
        name: 'addAccountStep3',
        props: ['account_to_show'],
        data () {
            return {}
        },
        components:{
            vSelect
        },
        watch: {
            account_to_show(value){
                
            }
        }
    }
</script>