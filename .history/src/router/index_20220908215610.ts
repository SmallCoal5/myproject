import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

// * 导入所有router

// * 处理路由
export const routerArray: RouteRecordRaw[] = [];
// console.log("routerArray", routerArray);
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    //   redirect: { name: "home" },
    // },
    // {
    //   path: "/login",
    name: "login",
    component: () => import("/src/views/login/index.vue"),
    meta: {
      requiresAuth: false,
      title: "登录页",
      key: "login",
    },
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/home/index.vue"),
    meta: {
      requiresAuth: false,
      title: "主页",
      key: "home",
    },
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/search/index.vue"),
    meta: {
      requiresAuth: false,
      title: "主页",
      key: "home",
    },
  },
  ...routerArray,
  {
    // 找不到路由重定向到404页面
    path: "/:pathMatch(.*)",
    redirect: { name: "404" },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  strict: false,
  // 切换页面，滚动到最顶部
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
