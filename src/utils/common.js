import Vue from "vue";

//时间转换函数
import moment from "moment"; //导入模块
moment.locale("zh-cn"); //设置语言 或 moment.lang('zh-cn');
Vue.filter("dateformat", (dataStr, pattern = "YYYY-MM-DD") => {
  return moment(dataStr * 1000).format(pattern);
});

//防抖函数
export function debounce(func,wait) {
  let timeout;
  return function () {
      let context = this;
      let args = arguments;

      if (timeout) clearTimeout(timeout);

      let callNow = !timeout;
      timeout = setTimeout(() => {
          timeout = null;
      }, wait)

      if (callNow) func.apply(context, args)
  }
}
