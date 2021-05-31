import { createRouter, createWebHistory,RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue"
import Contact from "../views/Contact.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: "/contact",
    component: Contact
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// router.beforeEach((to, from, next) => {
//   console.log('进入路由拦截');
//   if (to.path === '/login') {
//     next();
//   } else {
//     next();
//   }
//   // 若么有登录跳登录 demo
//   // if (!getCookie('token')) {
//   //   next('/login')
//   // } else {
//   //   next()
//   // }
// });

export default router;
