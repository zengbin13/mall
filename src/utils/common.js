import Vue from "vue";

//时间转换函数
import moment from "moment"; //导入模块
moment.locale("zh-cn"); //设置语言 或 moment.lang('zh-cn');
Vue.filter("dateformat", (dataStr, pattern = "YYYY-MM-DD") => {
  return moment(dataStr * 1000).format(pattern);
});

//防抖函数
export function debounce(fn, wait = 500, immediate = true) {
  //2.设置时间戳,使用setTimeout让返回函数延迟执行
  let timer, result;
  //1.直接返回传入的函数,并将返回函数的this绑定为使用位置的this
  return function(...args) {
    //3.timer存在时，将定时器清除
    if (timer) {
      clearTimeout(timer);
    }
    if (immediate) {
      //4.1 立即执行返回函数
      if (!timer) {
        result = fn.apply(this, args);
      }
      timer = setTimeout(() => {
        timer = null;
      }, wait);
    } else {
      //4.2 非立即执行返回函数
      timer = setTimeout(() => {
        fn.apply(this, args);
      }, wait);
    }
    //5.立即执行时返回函数的返回值
    return result;
  };
}
