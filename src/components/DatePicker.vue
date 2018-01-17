<template>
    <section class="component_content">
            <section class="component_main" v-show="show_component" >
            <label>Ingrese una de fecha</label>
            <div class="input-group" >
                <flat-pickr
                        v-model="date"
                        @on-change="listenToOnChangeEvent"
                        :config="config"
                        :required="true"
                        class="form-control"
                        placeholder="Click para desplegar el calendario"
                        name="date"
                        ref="datePicker">
                </flat-pickr>
                <div class="input-group-btn">
                    <button class="btn btn-default" type="button" title="Toggle" data-toggle>
                        <i class="fa fa-calendar">
                            <span aria-hidden="true" class="sr-only">Toggle</span>
                        </i>
                    </button>
                    <button class="btn btn-default" type="button" title="Refresh" data-clear>
                        <i class="fa fa-times">
                            <span aria-hidden="true" class="sr-only">Clear</span>
                        </i>
                    </button>
                </div>
            </div>
            <br/>
            <br/>

            <!--<pre>{{ startDate }}</pre>-->
            <!--<pre>{{ endDate }}</pre>-->

            <div class="col-md-offset-3 col-md-5">
                <br/>
                <br/>
                <button class="btn btn-primary btn-lg form-control" id="ta-send-button" v-on:click.prevent="sendData"  :class="{ disabled: isDisabled }" :disabled="isDisabled" >{{ processButton }}</button>
            </div>
        </section>

        <section class="component_messages" v-show="completed">
            <div class="alert alert-success alert-dismissable fade in">
                <a href="#" class="close" data-dismiss="alert" aria-label="close" >&times;</a>
                <strong>Success!</strong> Carga completada.
            </div>
        </section>

        <section class="component_loading" v-show="processing">
            <i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
            <span class="sr-only">Loading...</span>
        </section>

        <section class="component_failed_messages" v-show="failed">
            <div class="alert alert alert-danger alert-dismissable fade in">
                <a href="#" class="close"  aria-label="close" v-on:click="failed = false ">&times;</a>
                <strong>Error </strong> No se ha logrado sincronizar la informacion: {{ errorMsg }}
            </div>
        </section>
    </section>
</template>

<script>
    // bootstrap is just for this example
    import 'bootstrap/dist/css/bootstrap.css';
    // import this component
    import flatPickr from 'vue-flatpickr-component';
    import 'flatpickr/dist/flatpickr.css';
    // theme is optional
    import 'flatpickr/dist/themes/material_blue.css';
    // l10n is optional
    import {Spanish} from 'flatpickr/dist/l10n/es';
    // Plugins are optional
    // https://chmln.github.io/flatpickr/plugins/
    // import ConfirmDatePlugin from 'flatpickr/dist/plugins/confirmDate/confirmDate';
    // import 'flatpickr/dist/plugins/confirmDate/confirmDate.css';
    import RangePlugin from 'flatpickr/dist/plugins/rangePlugin';

    import moment from 'moment'
    import axios from 'axios';

    export default {
        name: 'date-picker',
        data () {
            return {

                processButton: 'Procesar',
                postResults: [],

                // Initial value
                date: null,
                // Get more form https://chmln.github.io/flatpickr/options/
                config: {
                    wrap: true, // set wrap to true only when using 'input-group'
                    altFormat: 'D j F  Y H:i',
                    altInput: true,
                    dateFormat: 'Y-m-d H:i',
                    locale: Spanish, // locale for this instance only
                    maxDate: moment().utc().endOf('day').format(),
                    mode: "single",
                    enableTime: true,
                    onChange: function(e,date){
                        console.log(date)
                    }
                },

                show_component: true,
                completed: false,
                failed: false,
                errorMsg: null,
                processing: false,
                startDate: null,
                endDate: null,

            }
        },

        props: ['options'],

        components: {
            flatPickr
        },

        methods: {

            listenToOnChangeEvent(selectedDates) {
                this.startDate = selectedDates[0];
                this.endDate = selectedDates[1];
            },

            sendData: function() {
                let flatPickrInstance = this.$refs.datePicker.fp;

                console.log('Start Date: ',this.startDate,' , endDate: ',this.endDate);
                console.log(flatPickrInstance.selectedDates);
                //console.log(this.options.url+flatPickrInstance.formatDate(this.endDate,'Y-m-d'));
                // console.log('EndDate: ', flatPickrInstance.formatDate(this.endDate,'Y-m-d'));
                this.processing = true;
                axios.post(this.options.url,
                    {'data': flatPickrInstance.selectedDates }, // the data to post
                    { headers: {
                            // 'Content-type': 'application/x-www-form-urlencoded',
                            'Accept': 'application/json',
                            // 'Access-Control-Allow-Origin': '*',
                            "Cache-Control": "no-cache",
                            "X-Requested-With": "XMLHttpRequest"
                        }
                    })
                .then(response => {
                        console.log(response);
                        this.postResults.push(response);
                        this.completed = true;
                })
                    .catch((error) => {
                        // Error
                        this.processing = false;
                        this.failed = true;
                        this.errorMsg = error.message;
                        console.log(error);

                    });
            }

        },

        computed: {
            isDisabled () {
                return (this.startDate && this.endDate)? false: true;
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


    }
</script>