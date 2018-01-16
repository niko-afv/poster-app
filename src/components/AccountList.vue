<template>
    <div>
        <table v-if="pages.length" class="table table-bigboy">
            <thead>
            <tr>
                <th class="text-center">Picture</th>
                <th >Account Name</th>
                <th class="th-description">Type</th>
                <th class="text-right">Date</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="page in pages">
                <td>
                    <div class="img-container">
                        <img :src="page.photo" :alt="page.name + ' picture'">
                    </div>
                </td>
                <td class="td-name">
                    {{ page.name }}
                </td>
                <td>
                    Facebook
                </td>
                <td class="td-number">{{ page.updated_at }}</td>
                <td class="td-actions">
                    <button type="button" rel="tooltip" data-placement="left" title="View Post" class="btn btn-info btn-simple btn-icon">
                        <i class="fa fa-image"></i>
                    </button>
                    <button type="button" rel="tooltip" data-placement="left" title="Edit Post" class="btn btn-success btn-simple btn-icon">
                        <i class="fa fa-edit"></i>
                    </button>
                    <button type="button" rel="tooltip" data-placement="left" title="Remove Post" class="btn btn-danger btn-simple btn-icon ">
                        <i class="fa fa-times"></i>
                    </button>
                </td>
            </tr>
            </tbody>
        </table>

        <div v-else="" style="margin-top: 10px;">
            <div class="alert alert-danger" role="alert">
                No content to show
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
                pages: []
            }
        },
        beforeCreate: function () {
            var user_id = this.$ls.get('user_id');
            var token = this.$ls.get('user_token');

            axios.get('http://poster.test/api/pages/',
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