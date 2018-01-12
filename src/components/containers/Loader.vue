<template>
    <div id="home">
        <div class="wrapper wrapper-full-page">
            <div class="full-page register-page" data-color="plutus">

                <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
                <div class="content">
                    <div class="container">
                        <div class="row loader">
                            <div class="col-md-12 col-md-offset-5">
                                <moon-loader :loading="true" :size="size"></moon-loader>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script>
    import MoonLoader from 'vue-spinner/src/MoonLoader.vue'
    import RingLoader from 'vue-spinner/src/RingLoader.vue'
    import DotLoader from 'vue-spinner/src/DotLoader.vue'
    export default {
        name: 'loader',
        data () {
            return {
                size: "140px"
            }
        },
        props : ['show'],
        components: {
            MoonLoader, RingLoader, DotLoader
        }
    }
</script>

<style>
    .loader.row{
        padding: 25% 0% !important;
    }
</style>