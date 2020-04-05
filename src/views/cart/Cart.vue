<template>
  <div class="cart">
    <!-- nav bar -->
    <cart-nav-bar></cart-nav-bar>
    <!-- content -->
    <div class="content" v-if="cartList.length">
      <cart-item v-for="item in cartList" :key="item.id" :cart-item="item" @change-count="changeVuexCartList()"></cart-item>
    </div>
    <!-- empty -->
    <empty v-else class="empty"></empty>
    <!-- total -->
    <total-cart></total-cart>
  </div>
</template>

<script>
import CartNavBar from "./cartNavBar/CartNavBar";
import Empty from "./empty/Empty";
import CartItem from "./cartItem/CartItem";
import TotalCart from "./totalCart/TotalCart";

export default {
  name: "Cart",
  components: {
    CartNavBar,
    Empty,
    CartItem,
    TotalCart
  },
  computed: {
    cartList: function() {
      return this.$store.state.cartList;
    }
  },
  methods: {
    changeVuexCartList() {
      this.$store.commit({
        type: "RESET_CARTLIST",
        cartList: this.cartList
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.cart {
  background-color: $bgColor;
}
.content {
  background-color: $bgColor;
  height: calc(100vh - 93px);
  overflow: auto;
}
.empty {
  height: calc(100vh - 44px);
}
</style>
