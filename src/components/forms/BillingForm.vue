<template>
    <form id = "MyForm" :method="method" :action="action" class="form-horizontal">
        <radio-tab :options="options"></radio-tab>
    </form>
</template>


<script>
    import FileUploader from '../FileUploader.vue'
    import RadioTab from '../RadioTab.vue'
    import TextareaUploader from '../TextareaUploader.vue'
    import datePicker from '../DatePicker.vue'

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

                                                    url: 'http://172.17.41.27/api/documents/sync/billings/fromFile',
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
                                                        var fileuploader = vm.$children[0].$children[0].$children[2].$children[0].$children[0].$children[0].$children[0].$children[0];
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
                                                    url: 'http://172.17.41.27/api/documents/sync/billings/fromJson'
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
                            {
                                instance: datePicker,
                                options:{
                                    url: 'http://172.17.41.27/api/documents/billings/sync/dateRange'
                                }
                            }
                        ]
                    }
                },
            }
        },
        props :['action', 'inputs'],
        components: {
            RadioTab, FileUploader, TextareaUploader,datePicker
        }
    }
</script>