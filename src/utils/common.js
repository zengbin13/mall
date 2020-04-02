export function debounce(fn) {
  let timeout = null; // 创建一个标记用来存放定时器的返回值
  return function() {
    // 每当用户输入的时候把前一个 setTimeout clear 掉
    clearTimeout(timeout);
    // 然后又创建一个新的 setTimeout, 这样就能保证interval 间隔内如果时间持续触发，就不会执行 fn 函数
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
    }, 500);
  };
}
