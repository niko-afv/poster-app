<template>

    <div id="groupForm" class="content">
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">

                    <div class="card">

                        <div class="header">
                            <h3>New group</h3>
                        </div>

                        <div class="content">
                            <div v-if="!saved" class="form-group">
                                <div class="input-group">
                                    <input class="form-control" v-model="group_name" name="group_name" placeholder="Ex: Company 1"  />
                                    <span class="input-group-addon"><i class="fa fa-group"></i></span>
                                </div>

                                <br/>

                                <div class="input-group">
                                    <input class="form-control" v-model="group_description" name="group_description" placeholder=""  />
                                    <span class="input-group-addon"><i class="fa fa-text-width"></i></span>
                                </div>

                                <br/>

                                <button class="btn btn-block btn-fill form-control" v-on:click="this.send" >Save</button>

                            </div>

                            <div v-else="">
                                <div class="alert alert-success">
                                    <span class="glyphicon glyphicon-ok-sign"></span> <strong>Operation completed successfully</strong>
                                    <hr class="message-inner-separator">
                                    <h6>
                                        What do you ant to do now?
                                    </h6>

                                    <br/>

                                    <button class="btn btn-social btn-link btn-wd btn-neutral"
                                            v-on:click="this.redirect"
                                    >
                                        <i class="fa fa-list"></i> See all groups
                                    </button>
                                    <button class="btn btn-social btn-link btn-neutral"
                                            v-on:click="saved = !saved"
                                    >
                                        <i class="fa fa-plus"></i> Add new group
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    </div>

</template>


<script>
    import * as Config from '../../config/app'
    import Vue from 'vue'

    export default {
        name: "groupForm",
        data() {
            return {
                group_name: null,
                group_description: null,
                saved: false,
                token : this.$ls.get('user_token'),
                url: Config.domain_app + 'groups',
                token : this.$ls.get('user_token'),
                user_id : this.$ls.get('user_id')
            }
        },
        props :['action'],
        components: {},
        methods: {
            redirect(){
                this.$router.push('/groups')
            },
            send(){
                var self = this;
                axios.post(this.url,
                    {
                        group_name: self.group_name,
                        group_description: self.group_description,
                        user_id: self.user_id
                    },
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
                        self.group_name = null
                        self.group_description = null
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

