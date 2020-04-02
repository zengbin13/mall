<template>
  <div class="empty">
    <img src="@/assets/img/empty.png" alt="empty">
    <div class="content">
      <p>购物车居然是空的</p>
      <p>再忙也记得买点东西犒劳下自己</p>
    </div>
    <div class="go" @click="goHome()">
      去逛逛
    </div>
  </div>
</template>

<script>
export default {
  name: "Empty",
  methods: {
    goHome() {
      this.$router.push("/main/home");
    }
  }
};
</script>

<style lang="scss" scoped>
.empty {
  text-align: center;
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  .content {
    font-size: 18px;
    line-height: 30px;
    color: $mainText;
    padding-bottom: 20px;
    p {
      margin: 0;
    }
  }
  .go {
    width: 80px;
    height: 30px;
    margin: 0 auto;
    color: $mainColor;
    border: 1px solid $mainColor;
    border-radius: 20px;
    line-height: 30px;
  }
}
</style>
