import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import VueAxios from "vue-axios";
// import "./bootstrap";
import router from "./router";
import store from "./store";
import vuetify from "@/plugins/vuetify"; // path to vuetify export
import VScrollLock from "v-scroll-lock";
import AOS from "aos";
import "aos/dist/aos.css";

Vue.use(VueAxios, axios);
window.axios = require("axios");
axios.defaults.baseURL = "http://localhost:3000";
Vue.use(VScrollLock);

Vue.config.productionTip = false;

new Vue({
  created() {
    AOS.init();
  },
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
