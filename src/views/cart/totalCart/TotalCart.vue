<template>
  <div class="totalCart">
    <div class="total">
      <svg-icon icon-class="select" class="icon-select" v-if="isSelect" @click.native="toggleSelect()"></svg-icon>
      <div class="select" v-else @click="toggleSelect()"></div>
      <span>全选</span>
    </div>
    <div class="delete" v-if="isDelete">
      <span @click="deleteItem()">删除</span>
    </div>
    <div class="price" v-else>
      <div class="totalPrice">合计: <span>￥{{totalPrice}}</span></div>
      <div class="totalCount" @click="pay()">结算({{totalCount}})</div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@/components/svgIcon/SvgIcon";
import { EventBus } from "@/utils/event-bus.js";
import { Toast } from "vant";

export default {
  name: "TotalCart",
  data() {
    return {
      cartList: [],
      isSelect: false,
      isDelete: false
    };
  },
  components: {
    SvgIcon
  },
  computed: {
    totalPrice() {
      return this.$store.state.totalPrice
    },
    totalCount() {
      return this.$store.state.totalCount
    }
  },
  methods: {
    //获取选中数据 - 选中的价格和数量
    getSelectItem() {
      this.cartList = this.$store.filterCartList;
    },
    //重置vuex中商品列表的select属性
    toggleSelect() {
      this.isSelect = !this.isSelect;
      this.$store.commit({
        type: "RESET_CARTLIST_SELECT",
        select: this.isSelect
      });
    },
    //删除购物车某些商品
    deleteItem() {
      this.$store.commit({
        type: "DELETE_SELECT_ITEM"
      })
    },
    //支付 toast
    pay() {
      Toast(`你需要支付${this.$store.state.totalPrice}元`)
    },
    //全选的样式切换
    isAllSelect() {
      this.isSelect = this.$store.state.allSelect
    }
  },
  mounted() {
    this.getSelectItem();
    EventBus.$on("select-cart-list", () => {
      this.getSelectItem()
    });
    EventBus.$on("toggle-delete", () => {
      this.isDelete = !this.isDelete;
    });
    EventBus.$on("all-select", () => {
      this.isAllSelect()
    });
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
.delete {
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    display: inline-block;
    padding: 5px 15px;
    background-color: $secColor2;
    border-radius: 20px;
    color: #fff;
  }
}
</style>
