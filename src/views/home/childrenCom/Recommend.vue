<template>
  <div class="recommend">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Recommend"
};
</script>

<style lang="scss" scoped>
.recommend {
  display: flex;
  justify-content: space-around;
  position: relative;
  margin-bottom: 15px;
  &::after {
    content: "";
    width: 100%;
    height: 15px;
    background-color: $bgColor;
    position: absolute;
    bottom: -15px;
  }
}
</style>
