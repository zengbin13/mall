import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("../views/home/Home.vue")
const Category = () => import("../views/category/Category.vue")
const Cart = () => import("../views/cart/Cart.vue")
const Me = () => import("../views/me/Me.vue")
const Detail = () => import("../views/detail/Detail.vue")

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      keepAlive: true
    }
  },
  {
    path: "/category",
    name: "Category",
    component: Category
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/me",
    name: "Me",
    component: Me
  },
  {
    path: "/me",
    name: "Me",
    component: Me
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
