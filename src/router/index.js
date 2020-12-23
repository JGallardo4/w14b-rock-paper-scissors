import Vue from "vue";
import VueRouter from "vue-router";
import RockPaperScissors from "../views/RockPaperScissors.vue";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "RockPaperScissors",
    component: RockPaperScissors,
    redirect: {
      name: "Login",
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
