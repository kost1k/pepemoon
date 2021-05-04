import Vue from "vue";
import VueRouter from "vue-router";

// route level code-splitting
// this generates a separate chunk (about.[hash].js) for this route
// which is lazy-loaded when the route is visited.
const Home = import(/* webpackChunkName: "home" */ "../views/Home.vue");
const Whitepaper = import(
  /* webpackChunkName: "about" */ "../views/Whitepaper.vue"
);
const NotFound = import(
  /* webpackChunkName: "notfound" */ "../views/NotFound.vue"
);

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => Home,
  },
  {
    path: "/whitepaper",
    name: "Whitepaper",
    component: () => Whitepaper,
  },
  {
    path: "*",
    name: "NotFound",
    component: () => NotFound,
  },
];

const scrollBehavior = function (to) {
  if (to.hash) {
    return {
      selector: to.hash,
      behavior: "smooth",
    };
  } else {
    return {
      x: 0,
      y: 0,
    };
  }
};

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior,
  routes,
});

export default router;
