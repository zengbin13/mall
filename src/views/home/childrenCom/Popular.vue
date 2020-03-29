<template>
  <div class="popular">
    <h4>
      <slot name="text"></slot>
    </h4>
    <div class="row">
      <slot name="item"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popular"
};
</script>

<style lang="scss" scoped>
.popular {
  h4 {
    padding: 20px 0;
    margin: 0;
    font-size: 18px;
    font-weight: lighter;
    letter-spacing: 2px;
    text-align: center;
  }
  .row {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
}
</style>
