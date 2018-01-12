<template>
    <div id="app">
        <loader :show="loading" v-if="loading"></loader>
        <transition name="fade">
            <router-view v-if="!loading"></router-view>
        </transition>
    </div>
</template>

<script>
import Vue from 'vue'
import vue2Dropzone from 'vue2-dropzone'
import Loader from './components/containers/Loader.vue'

import 'vue2-dropzone/dist/vue2Dropzone.css'

export default {
    name: 'app',
    data () {
        return {
            loading: true,
        }
    },
    components: {
        Loader
    },
    beforeMount(){
        var self = this
        setTimeout(function () {
            self.loading = false
        },3000)
    }
}
</script>

<style>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .45s
    }
    .fade-enter, .fade-leave-to, .fadefast-enter, .fadefast-leave-to{
        opacity: 0
    }

    .fadefast-enter-active, .fadefast-leave-active {
        transition: opacity .20s
    }

</style>