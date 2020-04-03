<template>
  <div class="totalCart">
    <div class="total">
      <svg-icon icon-class="select" class="icon-select" v-if="isSelect" @click.native="toggleSelect()"></svg-icon>
      <div class="select" v-else @click="toggleSelect()"></div>
      <span>全选</span>
    </div>
    <div class="price">
      <div class="totalPrice">合计: <span>￥{{totalPrice}}</span></div>
      <div class="totalCount">结算({{totalCount}})</div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@/components/svgIcon/SvgIcon";
import { EventBus } from '@/utils/event-bus.js'
export default {
  name: "TotalCart",
  data() {
    return {
      cartList: [],
      isSelect: false
    };
  },
  components: {
    SvgIcon
  },
  computed: {
    totalPrice() {
      let price = 0;
      price = this.cartList.reduce((acc, item) => {
        return acc + item.count * item.price;
      }, 0);
      return price.toFixed(2);
    },
    totalCount() {
      let count = 0;
      count = this.cartList.reduce((acc, item) => {
        return acc + item.count;
      }, 0);
      return count;
    }
  },
  methods: {
    toggleSelect() {
      this.isSelect = !this.isSelect;
      this.$store.commit({
        type: "RESET_CARTLIST_SELECT",
        select: this.isSelect
      });
      this.cartList = this.$store.state.cartList.filter(item => {
        return item.select === true;
      });
    },
    filterCartList() {
      this.cartList = this.$store.state.cartList.filter(item => {
        return item.select === true;
      });
    }
  },
  mounted() {
    this.filterCartList();
    EventBus.$on("filert-cart-list", () => {
      this.filterCartList();
    })
  }
};
</script>

<style lang="scss" scoped>
.totalCart {
  height: 50px;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  position: fixed;
  bottom: 55px;
  padding: 0px 10px;
  display: flex;
  justify-content: space-between;
}
.total {
  width: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 15px;
}
.icon-select,
.select {
  position: relative;
  top: -1px;
}
.icon-select {
  width: 21px;
  height: 21px;
}
.select {
  display: inline-block;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1.5px solid $secText;
}

.price {
  display: flex;
  justify-content: center;
  align-items: center;
  .totalPrice {
    margin-right: 20px;
    span {
      color: $mainColor;
    }
  }
  .totalCount {
    padding: 5px 10px;
    border-radius: 15px;
    background-color: $secColor;
    color: #fff;
  }
}
</style>
