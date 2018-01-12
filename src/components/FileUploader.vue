<template>
    <section class="component_content">
        <section class="component_main" v-show="show_component">
            <vue-dropzone id="dropzone" ref="drpzone" :options="options"></vue-dropzone>

            <div class="col-md-offset-3 col-md-5">
                <br/>
                <br/>
                <button class="btn btn-primary btn-lg form-control" id="dz-send-button" v-on:click.prevent="sendFile" :disabled="button_disabled">{{ button_text }}</button>
            </div>
        </section>

        <section class="component_messages">
            <div class="alert alert-success alert-with-icon" ref="success-alert" v-show="completed">
                El archivo ha sido procesado
            </div>

            <div class="alert alert-danger alert-with-icon" ref="error-alert" v-show="failed">
                Ha ocurrido un problema, comunicate con el equipo administrador
            </div>
        </section>

        <section class="component_loading" v-show="processing">
            <div class="loading-container">
                <img src="https://k33.kn3.net/taringa/3/7/0/4/1/3/undergroundpy/07D.gif" width="100%">
            </div>
        </section>
    </section>
</template>


<script>
    import vueDropzone from 'vue2-dropzone'
    import 'vue2-dropzone/dist/vue2Dropzone.css'

    export default {
        name: 'file-uploader',
        props: ['options'],
        data () {
            return {
                button_disabled: true,
                button_text: 'Debe cargar un archivo',
                files_count: 0,
                show_component: true,
                completed: false,
                processing: false,
                failed: false,
            }
        },
        components: {
            vueDropzone
        },
        mounted(){
            var $component = this;
            var $dropzone = $component.$refs.drpzone.$refs.dropzoneElement;
            $dropzone.addEventListener("DOMNodeInserted", function(event){//when preview template is inserted means a file was added
                $component.files_count = this.dropzone.files.length;
            }, true);
        },
        watch: {
            files_count(value){
                this.button_disabled = (value > 0)?false: true;
            },
            completed(value){
                this.processing = (value == true)?false: this.processing;
            },
            failed(value){
                this.processing = (value == true)?false: this.processing;
            },
            processing(value){
                this.show_component = (value == true)?false: this.show_component;
            }
        },
        methods: {
            sendFile(){
                this.processing = true;
                this.$refs.drpzone.processQueue()
            }
        },
    }
</script>