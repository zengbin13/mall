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
    <empty v-else></empty>
  </div>
</template>

<script>
import NavBar from "../../components/common/navBar/NavBar";
import Empty from "./empty/Empty";
import CartItem from "./cartItem/CartItem";
export default {
  name: "Cart",
  components: {
    NavBar,
    Empty,
    CartItem
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
  height: 100vh;
}
</style>
