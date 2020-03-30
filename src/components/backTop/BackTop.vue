<template>
  <div>
    <a href="#top" class="backTop">
      <svg-icon icon-class="arrow" class="arrow"></svg-icon>
    </a>
  </div>
</template>

<script>
import SvgIcon from "../svgIcon/SvgIcon";
export default {
  name: "BackTop",
  components: {
    SvgIcon
  }
};
</script>

<style lang="scss" scoped>
.backTop {
  display: block;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: rgba($color: #000000, $alpha: .2);
  position: fixed;
  bottom: 80px;
  right: 10px;
}
.arrow {
  fill: $mainColor;
  font-size: 32px;
  position: relative;
  top: 6px;
  left: 6px;
}
</style>
