<template>
    <div>
        <sidebar></sidebar>
        <div class="main-panel">
            <navbar></navbar>
            <transition name="fadefast">
                <router-view></router-view>
            </transition>
            <my-footer></my-footer>
        </div>
    </div>
</template>


<script>
    import Sidebar from '../Sidebar.vue'
    import Navbar from '../Navbar.vue'
    import MyFooter from '../MyFooter.vue'

    export default {
        name: '',
        data () {
            return {}
        },
        components: {
            Sidebar, Navbar, MyFooter
        },
    }
</script>