<template>
  <div class="cartItem">
    <div class="shop">
      <svg-icon icon-class="mogu" class="mogu"></svg-icon>
      {{cartItem.shopName}}
    </div>
    <div class="content">
      <svg-icon icon-class="select" class="icon-select" v-if="cartItem.select" @click.native="toggleSelect()"></svg-icon>
      <div class="select" v-else @click="toggleSelect()"></div>
      <img :src="cartItem.img" :alt="cartItem.img">
      <div class="info">
        <div class="desc">{{cartItem.desc}}</div>
        <div class="other"></div>
        <div class="price">
          <span>
            {{cartItem.price}}
          </span>
          <van-stepper v-model="cartItem.count" button-size="20px" class="stepper" @change="changeCount()" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@/components/svgIcon/SvgIcon";
import { EventBus } from "@/utils/event-bus.js";
export default {
  name: "CartItem",
  props: {
    cartItem: {
      type: Object
    }
  },
  components: {
    SvgIcon
  },
  methods: {
    toggleSelect() {
      this.cartItem.select = !this.cartItem.select;
      let index = this.$store.state.cartList.findIndex(item => {
        return item.iid === this.cartItem.iid;
      });
      this.$store.commit({
        type: "TOGGLE_CARTLIST_ITEM_SELECT",
        index: index,
        select: this.cartItem.select
      });
      //重新获取选中商品
      EventBus.$emit("select-cart-list");
    },
    changeCount() {
      this.$emit("change-count");
    }
  }
};
</script>

<style lang="scss" scoped>
.cartItem {
  margin: 0 auto;
  padding-bottom: 20px;
  width: 90%;
  background: #fff;
  border-radius: 20px;
  margin-top: 20px;
}
.shop {
  font-size: 14px;
  color: $mainText;
  margin-left: 36px;
  padding: 10px 0;
}
.content {
  display: flex;
  justify-content: start;
}
.icon-select {
  flex-shrink: 0;
  width: 21px;
  height: 21px;
  align-self: center;
  margin: 0 8px;
}
.select {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1.5px solid $secText;
  align-self: center;
  margin: 0 8px;
}
img {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
}
.info {
  margin: 0px 5px 0 15px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .desc {
    font-size: 14px;
    height: 40px;
    line-height: 20px;
    overflow: hidden;
  }
  .price {
    font-size: 16px;
    color: $mainColor;
    display: flex;
    justify-content: space-between;
    .stepper {
      margin-right: 20px;
    }
  }
}
</style>
