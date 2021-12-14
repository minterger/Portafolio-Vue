import {createRouter, createWebHistory} from "vue-router"; 'vue-router'

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../views/Home.vue"),
    meta: {
      title: "Home"
    }
  },
  {
    path: "/proyects",
    name: "proyects",
    component: () => import("../views/Proyects.vue"),
    meta: {
      title: "Proyects"
    }
  },
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
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;