<template>
    <div class="sidebar" data-color="plutus" data-image="../assets/img/full-screen-image-3.jpg">
        <!--
            Tip 1: you can change the color of the sidebar using: data-color="blue | azure | green | orange | red | purple"
            Tip 2: you can also add an image using data-image tag
        -->

        <div class="logo">
            <a href="http://www.creative-tim.com" class="logo-text">
                {{ title.normal }}
            </a>
        </div>
        <div class="logo logo-mini">
            <a href="http://www.creative-tim.com" class="logo-text">
                {{ title.responsive }}
            </a>
        </div>

        <div class="sidebar-wrapper">
            <UserWidget/>

            <ul class="nav">
                <li v-for="(item, index) in items" :class="$route.path==item.route?'active':''">
                    <a v-if="item.subitems" data-toggle="collapse" :href="'#components'+item.name">
                        <i :class="item.icon"></i>
                        <p>{{ item.name }}
                            <b class="caret" v-if="item.subitems"></b>
                        </p>
                    </a>

                    <router-link v-else :to="item.route" :class="$route.path==item.route?'active':''">
                        <i :class="item.icon"></i>
                        <p>{{ item.name }}</p>
                    </router-link>


                    <div class="collapse" :id="'components'+item.name" v-if="item.subitems && item.subitems.length > 0">
                        <ul class="nav">
                            <li v-for="subitem in item.subitems" :class="$route.path==subitem.route?'active':''">
                                <router-link :to="subitem.route">{{ subitem.name }}</router-link>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
    import UserWidget from './UserWidget.vue'
    export default {
        name: 'sidebar',
        created(){
            //console.log(this.$route);
        },
        data () {
            return {
                title: {normal: "PosterApp", responsive: "PA"},
                items: [
                    {name:"Dashboard", icon:"pe-7s-graph", route: "/dashboard"},
                    {
                        name: "Accounts",
                        icon: "pe-7s-users",
                        subitems: [
                            {route: "/accounts", name: "All accounts"},
                            {route: "/accounts/add" , name: "Add account"}
                        ],
                    },
                    {
                        name: "Groups",
                        icon: "pe-7s-network",
                        subitems: [
                            {route: "/groups", name: "All groups"},
                            {route: "/groups/add" , name: "Add group"}
                        ],
                    },
                ]
            }
        },
        components: {
            UserWidget
        }
    }
</script>