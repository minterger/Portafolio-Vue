import {createRouter, createWebHistory} from "vue-router"; 'vue-router'

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue")
  },
  // {
  //   path: "/about",
  //   name: "about",
  //   component: () => import("../views/About.vue")
  // },
  // {
  //   path: "/contact",
  //   name: "contact",
  //   component: () => import("../views/Contact.vue")
  // },
  // {
  //   path: "/login",
  //   name: "login",
  //   component: () => import("../views/Login.vue")
  // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;