// 设计稿以375px为宽度，而把页面宽度设计为10rem的情况下
const baseSize = 16; // 设计稿中1rem的大小
function setRem() {
  // 实际设备页面宽度和设计稿的比值
  const scale = document.documentElement.clientWidth / 375;
  // 计算实际的rem值并赋予给html的font-size
  if (baseSize * scale < 28) {
    document.documentElement.style.fontSize = (baseSize * scale) + 'px';
  }
}


setRem();
//4.监听浏览器窗口变化
window.addEventListener('resize', () => {
  setRem();
});