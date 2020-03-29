// window.onscroll = function() {
//   var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
//   console.log("滚动距离" + scrollTop);
// };

export function scrollTop() {
  window.onscroll = function() {
    let scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    return scrollTop;
  };
  return scrollTop;
}
