import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

//重置浏览器样式
import "normalize.css"
//引入全局组件
import "./icons/index";


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
