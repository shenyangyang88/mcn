import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    redirect: { name: "LoginIndex" },
    children: [
      {
        path: "index",
        name: "LoginIndex",
        component: () => import("../views/login/Index.vue"),
        meta: { title: "欢迎使用蓝色星合", requiresAuth: false },
      },
      {
        path: "register",
        name: "LoginRegister",
        component: () => import("../views/login/Register.vue"),
        meta: { title: "免费注册蓝色星合", requiresAuth: false },
      },
      {
        path: "forget",
        name: "LoginForget",
        component: () => import("../views/login/Forget.vue"),
        meta: { title: "忘记密码", requiresAuth: false },
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to) => {
  document.title = to.meta.title || process.env.VUE_APP_TITLE;
});

export default router;
