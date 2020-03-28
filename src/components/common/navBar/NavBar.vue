<template>
  <div class="nav-bar">
    <div class="left">
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar"
};
</script>

<style lang="scss" scoped>
.nav-bar {
  display: flex;
  height: 44px;
  text-align: center;
  line-height: 44px;
  box-shadow: 0 2px 12px 0 rgba($color: #000000, $alpha: .1);
  .left {
    flex: 1;
  }
  .right {
    flex: 1;
  }
  .center {
    flex: 3;
  }
}
</style>


