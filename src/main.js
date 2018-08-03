import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index'
import MintUI from 'mint-ui';
import VueTouch from 'vue-touch'
import execute from './libs/execute';
import minlin from './libs/miXin';
import './static/css/main.css';
import './static/css/mint-ui.css';


Vue.use(execute);
Vue.use(MintUI);
Vue.mixin(minlin);
Vue.use(VueTouch,{name:'v-touch'})
window.vm=new Vue({
    el: '#app',
    store: store,
    router,
    created(){
        this.computed_rem();
    },
    render:h=>{
        return h(App)
    }
}).$mount("#app")