<template>
  <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="客服" dot />
    <van-goods-action-icon icon="cart-o" text="购物车" :badge="cartCount" />
    <van-goods-action-icon icon="shop-o" text="店铺" />
    <van-goods-action-button type="warning" text="加入购物车" color="#fd9fbe" @click="enterCart()" />
    <van-goods-action-button type="danger" text="立即购买" color="#ff3f78" @click="pushCart()"/>
  </van-goods-action>
</template>

<script>
import { Toast } from "vant";

export default {
  name: "CartBar",
  props: {
    info: {
      type: Object
    }
  },
  data() {
    return {
      clickCount: 0
    };
  },
  computed: {
    cartCount() {
      return this.$store.state.cartList.length
    }
  },
  methods: {
    enterCart() {
      //toast 添加到购物车
      Toast("添加到购物车");
      //商品数量加一
      this.info.count++;
      this.$store.commit({
        type: "ADD_CART",
        info: this.info
      });
    },
    //跳转到购物车页面
    pushCart() {
      this.$router.push("/main/cart")
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
