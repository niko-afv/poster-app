<template>
    <form id="MyForm" :method="method" :action="action" class="form-horizontal">
        <div v-for="(component, index) in inputs">
            <div class="col-md-10">
                <component
                        v-bind:is="component.instance"
                        ref="drpzone"
                        :options="component.options"
                        id=""
                ></component>
            </div>

            <div class="clearfix"></div>
        </div>
    </form>
</template>


<script>
    import FileUploader from '../FileUploader.vue'
    import TextareaUploader from '../TextareaUploader.vue'
    import datePicker from '../DatePicker.vue'

    export default {
        name: "MyForm",
        data() {
            return {
                method: 'get',
                inputs: [
                    {
                        instance: FileUploader,
                        ref: 'drpzone',
                        options: {

                            url: 'http://172.17.41.27/api/accounts/sync/fromFile',
                            paramName: 'file',
                            method: 'POST',
                            acceptedFiles: '.csv',
                            addRemoveLinks: true,
                            timeout: 120000,
                            autoProcessQueue: false,
                            dictDefaultMessage: 'Arrastre el archivo a procesar',
                            headers: {
                                "Accept": "application/json",
                                "Cache-Control": "no-cache",
                                "X-Requested-With": "XMLHttpRequest"
                            },
                            error(e,b){
                                console.log("error");
                                console.log(e);
                                console.log(b);
                            },
                            success(file, response){
                                console.log("success");
                                var fileuploader = vm.$children[0].$children[0].$children[2].$children[0].$children[0].$children[0].$children[0];
                                console.log(fileuploader);

                                if(!response.error){
                                    fileuploader.completed = true
                                }else{
                                    fileuploader.failed = true
                                }
                            },
                            canceled(file){
                                console.log("canceled");
                                console.log(file);
                            },
                            processing(file, b,c){
                                console.log(file);
                            }
                        }
                    },
                    {
                        instance: TextareaUploader,
                        options: {
                            url: 'http://172.17.41.27/api/accounts/sync/fromJson'
                        }
                    },
                    {
                        instance: datePicker,
                        options:{
                            url: 'http://172.17.41.27/api/documents/billings/sync/dateRange'
                        }
                    }
                ],
                /*
                "options": {
                    byFile: {
                        'label' : "Subir Archivo",
                        isActive: true,
                        inputs: [
                            {
                                instance: FileUploader,
                                ref: 'drpzone',
                                options: {

                                    url: 'http://172.17.41.27/api/accounts/sync/fromFile',
                                    paramName: 'file',
                                    method: 'POST',
                                    acceptedFiles: '.csv',
                                    addRemoveLinks: true,
                                    timeout: 120000,
                                    autoProcessQueue: false,
                                    dictDefaultMessage: 'Arrastre el archivo a procesar',
                                    headers: {
                                        "Accept": "application/json",
                                        "Cache-Control": "no-cache",
                                        "X-Requested-With": "XMLHttpRequest"
                                    },
                                    error(e,b){
                                        console.log("error");
                                        console.log(e);
                                        console.log(b);
                                    },
                                    success(file, response){
                                        console.log("success");
                                        var fileuploader = vm.$children[0].$children[0].$children[2].$children[0].$children[0].$children[0].$children[0];
                                        console.log(fileuploader);

                                        if(!response.error){
                                            fileuploader.completed = true
                                        }else{
                                            fileuploader.failed = true
                                        }
                                    },
                                    canceled(file){
                                        console.log("canceled");
                                        console.log(file);
                                    },
                                    processing(file, b,c){
                                        console.log(file);
                                    }
                                }
                            },
                        ]
                    },
                    byText: {
                        'label' : "Ingresar Texto",
                        isActive: false,
                        inputs: [
                            {
                                instance: TextareaUploader,
                                options: {
                                    url: 'http://172.17.41.27/api/accounts/sync/fromJson'
                                }
                            }
                        ]
                    }
                },
                */
            }
        },
        props :['action'],
        components: {
            FileUploader, TextareaUploader,datePicker
        }
    }
</script>

<style>
    form > div {
        margin: 30px 0;
    }
</style>