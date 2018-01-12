<template>
    <form id = "MyForm" :method="method" :action="action" class="form-horizontal">
        <radio-tab :options="options"></radio-tab>
    </form>
</template>


<script>
    import FileUploader from './FileUploader.vue'
    import RadioTab from './RadioTab.vue'
    import TextareaUploader from './TextareaUploader.vue'
    export default {
        name: "MyForm",
        data() {
            return {
                method: 'get',
                options: {
                    byBatch: {
                        label: 'Por Lote',
                        isActive: true,
                        inputs: [
                            {
                                "instance": RadioTab,
                                "ref": "rdTab",
                                "options": {
                                    byFile: {
                                        'label' : "Subir Archivo",
                                        isActive: true,
                                        inputs: [
                                            {
                                                instance: FileUploader,
                                                ref: 'drpzone',
                                                options: {

                                                    url: this.action,
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
                                                        console.log(vm.$children[0].$children[2].$children[0].$children[0].$children[0].$children[0]);
                                                        console.log(response);
                                                        vm.$children[0].$children[2].$children[0].$children[0].$children[0].$children[0].$children[0].completed = true
                                                    },
                                                    canceled(file){
                                                        console.log("canceled");
                                                        console.log(file);
                                                    },
                                                    /*
                                                    addedfile(file){
                                                        //var uploader = vm.$children[0].$children[2].$children[0].$children[0].$children[0].$children[0].$children[0].$children[0].$refs.dropzoneElement;
                                                        console.log("added");
                                                        //console.log(this.files.length);
                                                        //file.previewElement = uploader.createElement(this.options.previewTemplate);
                                                        //return;
                                                        var uploader = vm.$children[0].$children[2].$children[0].$children[0].$children[0].$children[0].$children[0];
                                                        uploader.button_text = 'Procesar Archivo Cargado'
                                                        uploader.button_enable = true

                                                    },
                                                    */
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
                                }
                            }
                        ]
                    },
                    byDate: {
                        label: 'Por Fecha',
                        inputs: [

                        ]
                    }
                },
            }
        },
        props :['action', 'inputs'],
        components: {
            RadioTab, FileUploader, TextareaUploader
        }
    }
</script>