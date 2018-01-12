<template>
    <section class="component_content">

        <section class="component_main" v-show="show_component">
            <textarea rows="4" type="text" class="form-control" value="" v-model="data_accounts" />

            <div class="col-md-offset-3 col-md-5">
                <br/>
                <br/>
                <button class="btn btn-primary btn-lg form-control" id="ta-send-button" v-on:click.prevent="sendData"  :class="{ disabled: isDisabled }" :disabled="isDisabled" >{{ button_text_area }}</button>
            </div>
        </section>
        
        <section class="component_messages" v-show="completed">
            <div class="alert alert-info alert-with-icon">
                El archivo ha sido procesado
            </div>
        </section>

        <section class="component_loading" v-show="processing">
            <div class="loading-container">
                <img src="https://k33.kn3.net/taringa/3/7/0/4/1/3/undergroundpy/07D.gif" width="100%">
            </div>
        </section>

        <section class="component_failed_messages" v-show="hasErrors">
            <div class="alert alert alert-danger alert-dismissable fade in">
                <a href="#" class="close"  aria-label="close" :class="{ disabled: hasErrors }" :disabled="hasErrors" >&times;</a>
                <strong>Error </strong> {{ errorMsg }}
            </div>
        </section>
    </section>
</template>


<script>
    import axios from 'axios';

    export default {
        name: 'textareaUploader',
        data () {
            return {
                button_text_area: 'Procesar',
                button_enable_text_area: this.data_accounts,
                data_accounts: this.data_accounts,
                debug: true,
                postResults: [],
                show_component: true,
                completed: false,
                failed: false,
                processing: false,
                errorMsg: null

            }
        },
        props: ['options'],
        computed: {
            isDisabled () {
                if (this.data_accounts && this.data_accounts.match(/^[\n\r0-9a-zA-Z]+$/)){
                    return false;
                }else{
                    this.errorMsg = 'Los datos ingresados contienen errores';
                    return true;
                }
            },
            hasErrors () {
                if (this.data_accounts && !this.data_accounts.match(/^[\n\r0-9a-zA-Z]+$/)){
                    return true;
                }
            }
        },
        watch: {
            completed(value){
                this.processing = (value == true)?false: this.processing;
                this.failed = (value == true)?false: this.failed;
            },
            processing(value){
                this.show_component = (value == true)?false: this.show_component;
            },
            show_component(value){
                this.failed = (value == true)?false: this.failed;
            },
            failed(value){
                this.show_component = (value == true)?false: true;
            },
        },
        methods: {
            sendData: function() {
                this.processing = true;
                var textArea = this.data_accounts;
                var linebreak = textArea.split('\n');
                var length = linebreak.length;
                var data = [];
                for ( var i = 0 ; i<length ; i++){
                    data.push(  linebreak[i] );
                }

                axios.post(this.options.url,
                    {'data': data }, // the data to post
                    { headers: {
                        // 'Content-type': 'application/x-www-form-urlencoded',
                        'Accept': 'application/json',
                        // 'Access-Control-Allow-Origin': '*',
                        "Cache-Control": "no-cache",
                        "X-Requested-With": "XMLHttpRequest"
                    }
                    })
                    .then(response => {
                        console.log(response)
                        this.postResults.push(response);
                        this.completed = true;
                    })
                    .catch(error => {
                        console.log(error)
                        this.postResults.push(error);
                        this.errorMsg = error.message;
                    });
            }
        }
    }
</script>