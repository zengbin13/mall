<template>
  <div class="goodsList">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "GoodsList",
};
</script>

<style lang="scss" scoped>
.goodsList {
  background-color: $bgColor;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  padding-bottom: 79px;
  position: relative;
  &::after {
    content: "- 我也是有底线的 -";
    position: absolute;
    display: block;
    bottom: 49px;
    width: 100%;
    height: 30px;
    text-align: center;
    line-height: 30px;
    font-size: 13px;
    color: $mainText;
    background-color: $bgColor;
  }
}
</style>
