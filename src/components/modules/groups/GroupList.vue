<template>
    <div>
        <!--
        <div v-for="group in this.groups" class="col-md-4 visible-xs">
            <div class="card">
                <div class="header text-center">
                    <h4 class="title">{{ group.name }}</h4>
                    <p class="category">{{ group.category }}</p>
                </div>
                <div class="content text-center">
                    <div class="img-container">
                        <img :src="group.photo" :alt="group.name + ' picture'">
                    </div>
                </div>
                <div class="footer">
                    <div class="legend">
                        <i class="fa fa-clock-o"></i> group created at 2016 Jan 15
                    </div>
                    <hr>
                    <div class="stats">
                        <button type="button" v-on:click="saveGroup" rel="tooltip" data-placement="left" title="Edit Post" class="btn btn-success btn-fill btn-simple ">
                            <i class="fa fa-link"></i> Link
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
        -->

        <table v-if="this.groups.length" class="table table-bigboy hidden-xs">
            <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Accounts</th>
                <th width="15%">Action</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="group in groups">
                <td class="td-name">
                    {{ group.name }}
                </td>
                <td>
                    {{ group.description }}
                </td>
                <td>
                    {{ group.accounts.length }}
                </td>
                <td class="td-actions">

                    <div class="btn-group">
                        <a v-on:click="saveGroup(group)" rel="tooltip" title="Delete group" class="btn btn-danger btn-icon btn-simple">
                            <i class="fa fa-trash"></i>
                        </a>

                        <a v-on:click="saveGroup(group)" rel="tooltip" title="Edit group" class="btn btn- btn-success btn-icon btn-simple">
                            <i class="fa fa-edit"></i>
                        </a>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>


        <div v-else="" style="margin-top: 10px;">
            <div class="card">

                <div class="content">
                    <div class="alert alert-danger">
                        <span class="glyphicon glyphicon-exclamation-sign"></span> <strong>Something went wrong</strong>
                        <hr class="message-inner-separator">
                        <p>
                            No content to show
                        </p>
                    </div>
                </div>
            </div>
        </div>


    </div>
</template>


<script>
    import axios from 'axios';
    import VueLocalStorage from 'vue-ls';

    export default {
        name: "GroupList",
        data () {
            return {
                show_type: false,
                groups: []
            }
        },
        props : ['uris','options'],
        methods: {
            saveGroup(group){
                console.log(group);

                axios.post(this.options.uris.save_group,
                    {
                        id: group.id,
                        name: group.name,
                        category:group.category,
                        photo: group.photo,
                        user_id: this.$ls.get('user_id'),
                        group_type: null,
                        group_token: group.token
                    },
                    { headers: {
                        'Content-type': 'application/json',
                        'Accept': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Authorization': this.$ls.get('user_token')
                    }
                    })
                    .then(response => {
                        if(response.data.success){
                            console.log(response.data)
                        }
                        //this.postResults.push(response);
                    })
                    .catch(error => {
                        console.log(error)
                        //this.postResults.push(error);
                    });
            }
        },
        created: function () {
            var user_id = this.$ls.get('user_id');
            var token = this.$ls.get('user_token');
            console.log(token);
            var self = this;

            axios.get(this.options.uris.group_list,
                { headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': token
                }
                })
                .then(response => {
                    if(response.data.success){
                        console.log(response.data.data.groups)
                        self.groups = response.data.data.groups
                    }
                    //this.postResults.push(response);
                })
                .catch(error => {
                    console.log(error)
                    //this.postResults.push(error);
                });
        }
    }
</script>