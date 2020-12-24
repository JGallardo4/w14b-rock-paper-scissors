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
  },

  {
    path: "/login",
    name: "Login",
    component: Login,
  },

  // { path: "*", redirect: "/" },
];

const router = new VueRouter({
  mode: "hash",
  routes,
});

// router.beforeEach((to, from, next) => {
//   const publicPages = ["/login", "/"];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = this.$store.getters.getIsAuthenticated;

//   if (authRequired && !loggedIn) {
//     return next("/login");
//   }

//   next();
// });

export default router;
