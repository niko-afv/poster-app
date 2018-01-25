<template>
    <div id = "MySection" class="card">
        <div v-for="(component, index) in components">
                <component
                        v-bind:is="component.instance"
                        ref=""
                        :options="component.options"
                        id=""
                ></component>

            <div class="clearfix"></div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'MySection',
        data() {
            return {
            }
        },
        props: ['components']
    }
</script>