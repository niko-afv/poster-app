<template>
    <div id="groupContainer" class="content">
        <div class="container-fluid">
            <h2> Groups </h2>
            <my-section :components="components" :options="components"></my-section>
        </div>
    </div>
</template>


<script>
    import MySection from '../MySection.vue'
    import GroupList from '../modules/groups/GroupList.vue'
    import * as Auth from '../../services/auth'
    import * as Config from '../../config/app'

    export default {
        name: 'groupContainer',
        data() {
            return {
                components:[
                    {
                        instance: GroupList,
                        options: {
                            uris:{
                                group_list: Config.domain_app + 'users/' + this.$ls.get('user_id') + '/groups',
                                save_group: Config.domain_app + 'groups'
                            },
                        }
                    }
                ]
            }
        },
        components: {
            MySection
        }
    }
</script>