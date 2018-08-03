<template>
    <div id="app">
        <div class="box">
            <router-view name="headers"></router-view>
            <router-view class="view"></router-view>
        </div>
    </div>
</template>
<style lang="less">
@import './static/css/index.less';
@import  './static/css/main.css';
</style>
<script>
    import Vue from 'vue';
    import util from "./libs/util";
    export default {
        data() {
            return {
                transitionName: ''
            };
        },
        created(){
            var eventHup=new Vue();
            this.$root.eventHup=eventHup;
        },
        mounted() {
        },
        methods: {
    
        },
        watch: {
            $route(to, from) {
                this.$store.commit('change_title', to.meta.title);
                this.$store.commit('change_route_name',to.name);
            }
        }
    };
</script>

