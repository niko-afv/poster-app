<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-minimize">
                <button id="minimizeSidebar" class="btn btn-warning btn-fill btn-round btn-icon" v-on:click="initMinimizeSidebar">
                    <i class="fa fa-ellipsis-v visible-on-sidebar-regular"></i>
                    <i class="fa fa-navicon visible-on-sidebar-mini"></i>
                </button>
            </div>
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <router-link class="navbar-brand" :to="'/dashboard'">{{ title }}</router-link>
            </div>
            <div class="collapse navbar-collapse">

                <!--
                <InputSearch/>
                -->
                <ul class="nav navbar-nav navbar-right">
                    <!--
                    <li>
                        <a href="charts.html">
                            <i class="fa fa-line-chart"></i>
                            <p>Stats</p>
                        </a>
                    </li>

                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <i class="fa fa-gavel"></i>
                            <p class="hidden-md hidden-lg">
                                Actions
                                <b class="caret"></b>
                            </p>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Create New Post</a></li>
                            <li><a href="#">Manage Something</a></li>
                            <li><a href="#">Do Nothing</a></li>
                            <li><a href="#">Submit to live</a></li>
                            <li class="divider"></li>
                            <li><a href="#">Another Action</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <i class="fa fa-bell-o"></i>
                            <span class="notification">5</span>
                            <p class="hidden-md hidden-lg">
                                Notifications
                                <b class="caret"></b>
                            </p>
                        </a>
                        <ul class="dropdown-menu">
                            <li><a href="#">Notification 1</a></li>
                            <li><a href="#">Notification 2</a></li>
                            <li><a href="#">Notification 3</a></li>
                            <li><a href="#">Notification 4</a></li>
                            <li><a href="#">Another notification</a></li>
                        </ul>
                    </li>
                    -->

                    <li class="dropdown dropdown-with-icons">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                            <i class="fa fa-list"></i>
                            <p class="hidden-md hidden-lg">
                                More
                                <b class="caret"></b>
                            </p>
                        </a>
                        <ul class="dropdown-menu dropdown-with-icons">
                            <!--
                            <li>
                                <a href="#">
                                    <i class="pe-7s-mail"></i> Messages
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="pe-7s-help1"></i> Help Center
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i class="pe-7s-tools"></i> Settings
                                </a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a href="#">
                                    <i class="pe-7s-lock"></i> Lock Screen
                                </a>
                            </li>
                            -->
                            <li>
                                <a href="#" class="text-danger" @click="$keycloak.logout()" >
                                    <i class="pe-7s-close-circle"></i>
                                    Log out
                                </a>
                            </li>
                        </ul>
                    </li>

                </ul>

            </div>
        </div>
    </nav>
</template>


<script>
    import InputSearch from './InputSearch.vue'
    export default {
        name: 'navbar',
        data () {
            return {
                title: "Adminus",
                mini_mode_active: false,
                isWindows : navigator.platform.indexOf('Win') > -1 ? true : false,
                items: [
                    {name: "Dashboard"},
                    {
                        name: "Procesar",
                        subitems: [
                            {name: "Liquidaciones"},
                            {name: "Facturas"}
                        ]
                    },
                    {name: "Cuentas"}
                ]
            }
        },
        components: {
            InputSearch
        },
        created: function(){
            this.mini_mode_active = false
        },
        methods: {
            initMinimizeSidebar: function () {
                // when we are on a Desktop Screen and the collapse is triggered we check if the sidebar mini is active or not. If it is active then we don't let the collapse to show the elements because the elements from the collapse are showing on the hover state over the icons in sidebar mini, not on the click.
                if (this.mini_mode_active == true) {
                    $('body').removeClass('sidebar-mini');
                    this.mini_mode_active = false;

                    if (this.isWindows) {
                        $('.sidebar .sidebar-wrapper').perfectScrollbar();
                    }

                } else {

                    if (this.isWindows) {
                        $('.sidebar .sidebar-wrapper').perfectScrollbar('destroy');
                    }

                    setTimeout(function () {
                        $('body').addClass('sidebar-mini');

                        $('.sidebar .collapse').css('height', 'auto');
                    }, 300);
                    this.mini_mode_active = true;
                }

                // we simulate the window Resize so the charts will get updated in realtime.
                var simulateWindowResize = setInterval(function () {
                    window.dispatchEvent(new Event('resize'));
                }, 180);

                // we stop the simulation of Window Resize after the animations are completed
                setTimeout(function () {
                    clearInterval(simulateWindowResize);
                }, 1000);
            }
        }
    }
</script>