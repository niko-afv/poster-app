<template>
  <div class="col-sm-12">
    <div class="form-group">
      <label for="domain">url</label>
      <input type="text" class="form-control" value="" v-model="domain" />
    </div>
  </div>
  <div class="col-sm-12">
    <!--
    <a href="#" class="btn btn-success" @click="sendData">Send post</a>
    --> 
    <span v-if="ajaxRequest">Please Wait ...</span>
    <span v-if="postResults">{{ postResults }}</span>
  </div>
</template>


<script>
    import axios from 'axios';
    export default {
        name: 'HttpClient',
        data() {
            return {
                debug: true,
                domain: this.domain,
                ajaxRequest: false,
                postResults: []
            }
        },
        methods: {
          sendData: function() {
            this.ajaxRequest = true;

            axios.post(this.domain, 
                {'data': 'test'}, // the data to post
                { headers: {
                  'Content-type': 'application/x-www-form-urlencoded',
                  'Accept': 'application/json',
                  'Access-Control-Allow-Origin': '*',
                  }
                })
                .then(response => { 
                    console.log(response)
                    this.postResults.push(response);
                })
                .catch(error => {
                    console.log(error)
                    this.postResults.push(error);
                });

          }}
    }

</script>