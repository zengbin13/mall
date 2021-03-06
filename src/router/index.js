import Vue from "vue";
import VueRouter from "vue-router";
const Main = () => import("../views/main/Main.vue");
const Home = () => import("../views/home/Home.vue");
const Category = () => import("../views/category/Category.vue");
const Cart = () => import("../views/cart/Cart.vue");
const Me = () => import("../views/me/Me.vue");
const Detail = () => import("../views/detail/Detail.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/main/home",
  },
  {
    path: "/main",
    redirect: "/main/home",
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
    children: [
      {
        path: "/main/home",
        name: "Home",
        component: Home,
        meta: { tabBarIndex: 0 },
      },
      {
        path: "/main/category",
        name: "Category",
        component: Category,
        meta: { tabBarIndex: 1 },
      },
      {
        path: "/main/cart",
        name: "Cart",
        component: Cart,
        meta: { tabBarIndex: 2 },
      },
      {
        path: "/main/me",
        name: "Me",
        component: Me,
        meta: { tabBarIndex: 3 },
      },
    ],
  },
  {
    path: "/detail",
    name: "Detail",
    component: Detail,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});


export default router;
