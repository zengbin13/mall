import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartList: [
      
    ],
    totalCount: 0,
    allSelect: false,
  },
  getters: {
    //选中的购物车列表
    filterCartList(state) {
      return state.cartList.filter((item) => {
        return item.select === true;
      });
    },
    //选中购物车的总价格
    filterCartListPrice(state, getters) {
      let price = getters.filterCartList.reduce((acc, item) => {
        return acc + item.count * item.price;
      }, 0);
      return price.toFixed(2);
    },
    //选中购物车的数量
    filterCartListCount(state, getters) {
      let count = getters.filterCartList.reduce((acc, item) => {
        return acc + item.count;
      }, 0);
      return count;
    },
    //购物车的商品种类
    cartListKind(state) {
      return state.cartList.length;
    },
  },
  mutations: {
    ADD_CART(state, plyload) {
      let count = state.cartList.findIndex((element) => {
        //记得return
        return element.iid === plyload.info.iid;
      });
      if (count === -1) {
        state.cartList.push(plyload.info);
      } else {
        state.cartList[count] = plyload.info;
      }
    },
    RESET_CARTLIST(state, plyload) {
      state.cartList = plyload.cartList;
    },
    RESET_CARTLIST_SELECT(state, plyload) {
      state.cartList.forEach((item) => {
        item.select = plyload.select;
      });
    },
    TOGGLE_CARTLIST_ITEM_SELECT(state, plyload) {
      state.cartList[plyload.index].select = plyload.select;
    },
    DELETE_SELECT_ITEM(state, plyload) {
      let filterArr = [];
      let deleteArr = plyload.filterCartList;
      state.cartList.forEach((item) => {
        if (deleteArr.indexOf(item) === -1) {
          filterArr.push(item);
        }
      });
      state.cartList = filterArr;
    },
    //判断是否为全选状态
    ALL_SELECT(state) {
      if (state.cartList.length === 0) {
        return (state.allSelect = false);
      }
      let flag = state.cartList.every((item) => {
        return item.select === true;
      });
      if (flag) {
        state.allSelect = true;
      } else {
        state.allSelect = false;
      }
    },
    //改变选择的商品列表CHANGE_
    // CHANGE_FILTER_CARTLIST(state) {},
  },
  actions: {},
  modules: {},
});
