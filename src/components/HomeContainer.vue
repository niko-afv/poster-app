<template>
    <div id="home">
        <div class="wrapper wrapper-full-page">
            <div class="full-page register-page" data-color="plutus" data-image="../../assets/img/full-screen-image-2.jpg">

                <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
                <div class="content">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2">
                                <div class="header-text">
                                    <h2>Poster</h2>
                                    <h4>Social Managers App</h4>
                                    <hr />
                                </div>
                            </div>
                            <div class="col-md-5 col-md-offset-4">
                                <div class="media">
                                    <div class="media-left">
                                        <div class="icon">
                                            <i class="pe-7s-network"></i>
                                        </div>
                                    </div>
                                    <div class="media-body">
                                        <h4>Publicación Multiple</h4>
                                        Crea un unico post y publicalo en diferentes redes sociales.
                                    </div>
                                </div>

                                <div class="media">
                                    <div class="media-left">
                                        <div class="icon">
                                            <i class="pe-7s-timer"></i>
                                        </div>
                                    </div>
                                    <div class="media-body">
                                        <h4>Programa Tus Publicaciones</h4>
                                        Manten organizadas tu redes sociales, programando el dia y la hora de cada publicación.
                                    </div>
                                </div>

                                <div class="media">
                                    <div class="media-left">
                                        <div class="icon">
                                            <i class="pe-7s-settings"></i>
                                        </div>
                                    </div>
                                    <div class="media-body">
                                        <h4>Organiza tus cuentas</h4>
                                        Puedes crear grupos de cuentas, para los diferentes propositos que manejes.
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-12 col-md-offset-5">
                                <a class="btn btn-wd btn-danger btn-fill" href="http://poster.nicolasfredes.cl">
                                    ENTRAR
                                </a>
                                <!--
                                <router-link to="/dashboard" class="btn btn-wd btn-danger btn-fill">Entrar</router-link>
                                -->
                            </div>
                        </div>
                    </div>
                </div>

                <footer class="footer footer-transparent">
                    <div class="container text-center">
                        <br/>
                        <br/>
                        <small>
                            &copy; 2017 <a href="javascript:void(0)" class="text-info">Kronos Team</a>, made with love for a better web
                        </small>
                    </div>
                </footer>

            </div>

        </div>
    </div>
</template>

<script>
    import * as Auth from '../services/auth'

    export default {
        name: 'home',
        data () {
            return {
            }
        }
    }
</script>