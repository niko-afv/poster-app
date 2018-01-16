<template>
    <div class="user">
        <div class="photo">

            <img :src="avatar" />

        </div>
        <div class="info">
            <a data-toggle="collapse" href="#profileCollapse" class="collapsed">
                {{ fullname }}
                <b class="caret"></b>
            </a>
            <div class="collapse" id="profileCollapse">
                <ul class="nav">
                    <li v-for="item in menu.items"><a :href="item.href">{{ item.name }}</a></li>
                </ul>
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'UserWidget',
        data () {
            return {
                firstname: '',
                lastname: '',
                email: '',
                username: '',
                fullname: '',
                avatar: '',
                menu: {
                    items: [
                        {name: "Mi Perfil", icon: "", href: 'javascript:void(0);'},
                        {name:"Configuraciones", icon:"", href:'javascript:void(0);'}
                    ]
                }
            }
        },
        watch: {
            firstname: function(val){
                this.fullname = val + ' ' + this.lastname
            },
            lastname: function(val){
                this.fullname = this.firstname + ' ' + val
            }
        },
        created(){
            console.log(this.$keycloak)
            this.firstname = "Nicolás"
            this.lastname = 'Fredes'
            this.email = 'niko.afv@gmail.com'
            this.username = 'niko.afv'
            this.avatar = ''
        }
    }
</script>