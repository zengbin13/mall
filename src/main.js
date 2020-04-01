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
//全局方法
import moment from 'moment'; //导入模块
moment.locale('zh-cn'); //设置语言 或 moment.lang('zh-cn'); 
Vue.filter('dateformat', (dataStr, pattern = 'YYYY-MM-DD') =>{
  return moment(dataStr*1000).format(pattern)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
