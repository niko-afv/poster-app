<template>
    <div>

        <div v-for="page in pages" class="col-md-4 visible-xs">
            <div class="card">
                <div class="header text-center">
                    <h4 class="title">{{ page.name }}</h4>
                    <p class="category">{{ page.category }}</p>
                </div>
                <div class="content text-center">
                    <div class="img-container">
                        <img :src="page.photo" :alt="page.name + ' picture'">
                    </div>
                </div>
                <div class="footer">
                    <div class="legend">
                        <i class="fa fa-clock-o"></i> Page created at 2016 Jan 15
                    </div>
                    <hr>
                    <div class="stats">
                        <button type="button" rel="tooltip" data-placement="left" title="Edit Post" class="btn btn-success btn-fill btn-simple ">
                            <i class="fa fa-link"></i> Link
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>


        <table v-if="pages.length" class="table table-bigboy hidden-xs">
            <thead>
            <tr>
                <th class="text-center">Picture</th>
                <th >Account Name</th>
                <th v-if="show_type" class="th-description">Type</th>
                <th>Vincular</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="page in pages">
                <td>
                    <div class="img-container">
                        <img :src="page.photo" :alt="page.name + ' picture'" width="40%">
                    </div>
                </td>
                <td class="td-name">
                    {{ page.name }}
                </td>
                <td v-if="show_type">
                    Facebook
                </td>
                <td class="td-actions">
                    <!--
                    <button type="button" rel="tooltip" data-placement="left" title="View Post" class="btn btn-info btn-simple btn-icon">
                        <i class="fa fa-unlink"></i>
                    </button>
                    -->
                    <button type="button" rel="tooltip" data-placement="left" title="Edit Post" class="btn btn-success btn-fill btn-simple ">
                        <i class="fa fa-link"></i> Link
                    </button>
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

    export default {
        name: "AccountList",
        data () {
            return {
                pages: [],
                show_type: false
            }
        },
        props : ['url'],
        created: function () {
            var user_id = this.$ls.get('user_id');
            var token = this.$ls.get('user_token');

            axios.get(this.url,
                { headers: {
                    'Content-type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': token
                }
                })
                .then(response => {
                    if(response.data.success){
                        console.log(response.data.data.pages)
                        this.pages = response.data.data.pages
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