import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    content:[]
  },
  mutations: {
    SET_CONTENT_TO_STATE: (state, content) => {
      state.content = content;
    },    
  },
  actions: {
    GET_CONTENT_FROM_API({ commit }) {
      return Axios("http://localhost:3000/content", {
        method: "GET",
      })
        .then(content => {
          commit("SET_CONTENT_TO_STATE", content.data);
          return content;
        })
        .catch(error => {
          console.log(error);
          return error;
        });
    },

  },
  getters:{
    CONTENT(state) {
      return state.content;
    }
  },
  modules: {}
});
