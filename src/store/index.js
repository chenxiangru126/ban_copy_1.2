import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
      'status':null ,//
      'title_name':'我的啊啊啊', //
      'route_name':null //
    },
    mutations: {
      change_status (state,status) {
        state.status=status;
      },
      change_title (state,title) {
        state.title_name=title;
      },
      change_route_name(state,route_name){
        state.route_name=route_name;
      }
    }
  })
  export default store;
//   store.commit('increment')