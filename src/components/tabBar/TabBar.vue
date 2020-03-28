<template>
  <div class="tabBar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar"
};
</script>

<style lang="scss" scoped>
.tabBar {
  height: 49px;
  background-color: $bgColor;
  box-shadow: 0 -2px 12px 0 rgba(0, 0, 0, 0.1);
  color: $mainText;

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: space-around;
}
</style>
