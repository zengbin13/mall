import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

//重置浏览器样式
import "normalize.css";
//引入全局组件
import "./icons/index";
import Vant from "vant";
import "vant/lib/index.css";
Vue.use(Vant);
//路由相关
import "./router/permit";
//引入全局插件
import VueLazyload from "vue-lazyload";
// Vue.use(VueLazylaod)
Vue.use(VueLazyload, {
  preLoad: 3,
  loading: require("./assets/img/placeholder.png"),
  attempt: 1,
});
//设置根元素字体大小
import "./utils/rem";

//$bus 不具备DOM的组件
// Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
