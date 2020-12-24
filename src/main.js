import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import Vuex from "vuex";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHandRock,
  faHandScissors,
  faHandPaper,
  faAngleRight,
  faInfo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faHandRock, faHandScissors, faHandPaper, faAngleRight, faInfo);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isAuthenticated: true,
  },

  getters: {
    getIsAuthenticated(state) {
      return state.isAuthenticated;
    },
  },

  mutations: {
    LOG_IN(state) {
      state.isAuthenticated = true;
    },
    LOG_OUT(state) {
      state.isAuthenticated = false;
    },
  },

  actions: {
    logIn(context) {
      axios
        .get("")
        .then(() => {
          context.commit("LOG_IN");
        })
        .catch(console.log);

      return this.getters.getJoke;
    },
  },
});

new Vue({
  router,
  axios: axios,
  store: store,
  render: (h) => h(App),
}).$mount("#app");
