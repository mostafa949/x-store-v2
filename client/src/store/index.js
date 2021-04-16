import Vue from "vue";
import Vuex from "vuex";
import Auth from "./modules/Auth";
import Home from "./modules/home";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Auth,
    Home,
  },
});
