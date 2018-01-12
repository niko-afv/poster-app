<template>
    <div id="home">
        <div class="wrapper wrapper-full-page">
            <div class="full-page register-page" data-color="plutus">

                <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
                <div class="content">
                    <div class="container">
                        <div class="row loader">
                            <div>
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
    .row.loader{
        padding: 25% 0% !important;
        text-align: center;
    }
    .row.loader > div{
        width: 12%; margin: 0 auto;
    }
    @media (max-width: 1024px) {
        .row.loader > div{
            width: 20%; margin: 0 auto;
        }
    }

    @media (max-width: 400px) {
        .row.loader > div{
            width: 36%; margin: 0 auto;
        }
    }


</style>