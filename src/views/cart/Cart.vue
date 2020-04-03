<template>
  <div class="cart">
    <!-- nav bar -->
    <nav-bar class="navbar">
      <template #center>
        购物车
      </template>
    </nav-bar>
    <!-- content -->
    <div class="content" v-if="cartList.length">
      <cart-item v-for="item in cartList" :key="item.id" :cart-item="item"></cart-item>
    </div>
    <!-- empty -->
    <empty v-else class="empty"></empty>
    <!-- total -->
    <total-cart></total-cart>
  </div>
</template>

<script>
import NavBar from "../../components/common/navBar/NavBar";
import Empty from "./empty/Empty";
import CartItem from "./cartItem/CartItem";
import TotalCart from "./totalCart/TotalCart";

export default {
  name: "Cart",
  components: {
    NavBar,
    Empty,
    CartItem,
    TotalCart
  },
  computed: {
    cartList: function() {
      return this.$store.state.cartList;
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: $mainColor;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 2px;
  position: sticky;
  top: 0;
}
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
