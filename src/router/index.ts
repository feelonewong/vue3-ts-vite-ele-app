import { createWebHistory, createRouter } from "vue-router"

const routes = [
  {
    path: "/",
    component: () => import("@/views/Index.vue"),
    children: [
      {
        path: "",
        redirect: "/home",
      },
      {
        path: "/home",
        component: () => import("@/views/Home.vue"),
      },
      {
        path: "/order",
        component: () => import("@/views/Order.vue"),
      },
      {
        path: "/me",
        component: () => import("@/views/Me.vue"),
      },
    ],
  },
  {
    path: "/login",
    component: () => import("@/views/Login.vue"),
  },
  {
    path: "/address",
    component: () => import("@/views/Address.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

// 路由守卫：用token判断
router.beforeEach((to, from, next )=>{
  const hasToken = localStorage.getItem("token")

  if(to.path == '/login'){
    next()
  }else {
    if(hasToken){
      next()
    }else {
      next({path: '/login'})
    }
  }

})

export default router;