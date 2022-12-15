import { createWebHistory, createRouter } from "vue-router"

const routes = [
  {
    path: "/",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/login",
    component: () => import("@/views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;