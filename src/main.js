import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

//重置浏览器样式
import "normalize.css";
//引入全局组件
import "./icons/index";
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


//$bus 不具备DOM的组件
// Vue.prototype.$bus = new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
