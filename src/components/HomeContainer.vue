<template>
    <div id="home">
        <div class="wrapper wrapper-full-page">
            <div class="full-page register-page" data-color="plutus" data-image="">

                <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
                <div class="content">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-md-offset-2">
                                <div class="header-text">
                                    <h2>
                                        <img class="center-block img-responsive" src="../assets/img/app/poster_logo_white.png" />
                                    </h2>
                                    <hr />
                                    <h4>Organiza, Programa y disfruta, haz tu vida mas facil</h4>

                                </div>
                            </div>
                            <div class="col-md-5 col-md-offset-1">
                                <div class="media">
                                    <div class="media-left">
                                        <div class="icon">
                                            <i class="pe-7s-network"></i>
                                        </div>
                                    </div>
                                    <div class="media-body">
                                        <h4>Publicación Multiple
                                        </h4>
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
                                        <h4>Programa Tus Publicaciones
                                        </h4>
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
                                        <h4>Organiza tus cuentas
                                        </h4>
                                        Puedes crear grupos de cuentas, para los diferentes propositos que manejes.
                                    </div>
                                </div>

                            </div>
                            <div class="col-md-4 col-md-offset-1">

                                <figure>
                                    <img class="center-block img-responsive" src="http://xtremeproapparel.com/thumbnail.asp?file=assets/images/comingsoon1.png&maxx=300&maxy=0">
                                </figure>
                                <a class="btn btn-block btn-facebook btn-hover btn-fill" href="javascript:void(0);">
                                    <div class="icon">
                                        <i class="fa fa-facebook-square fa-2x"></i>
                                    </div>
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
                            &copy; 2018 Developed by <a href="http://nicolasfredes.cl" class="text-info">Nicolas Fredes</a>
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