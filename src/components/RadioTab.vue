<template>
    <div class="radiotab-container">
        <ul class="options">
            <li v-for="(option, index) in options">
                <label class="radio" ref="batch" v-bind:class="{checked: option.isActive}">
                    <span class="icons">
                        <span class="first-icon fa fa-circle-o"></span>
                        <span class="second-icon fa fa-dot-circle-o"></span>
                    </span>
                    <input type="radio" data-toggle="radio" name="optionsRadios" :value="index" checked="" v-model="value" v-on:change="changeRadio">{{ option.label }}
                </label>
            </li>
        </ul>
        <div class="tab-content" v-for="(option, index) in options" :data-id="index" style="display: none" v-show="option.isActive">
            <br/>
            <br/>
            <br/>

            <div v-for="(component, index) in option.inputs">
                <div class="col-md-10">
                    <component
                            v-bind:is="component.instance"
                            ref="drpzone"
                            :options="component.options"
                            id=""
                    ></component>
                </div>

                <div class="clearfix"></div>
            </div>
        </div>




    </div>

</template>


<script>
    export default {
        name: 'radiotab',
        data () {
            return {
                value: 'byBatch',
            }
        },
        props: ['options'],
        created: function(){
        },
        methods: {
            changeRadio: function(){
                for (var option in this.options){
                    this.options[option].isActive = (this.value == option)? true: false;
                }
            }
        },
    }
</script>

<style lang="scss" scope>
    @import "../assets/sass/radiotab.scss";
</style>