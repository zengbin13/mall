import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartList: [
      // {
      //   count: 1,
      //   desc: "2018 新款女装上衣文艺棉麻短袖t恤 V领衫T恤女短袖女T桖",
      //   iid: "1jw0sr2",
      //   img:
      //     "//s11.mogucdn.com/p2/170301/106341701_4kfgdd3001475k8h1l365al2k5ed6_640x960.jpg",
      //   price: "56.64",
      //   select: false,
      //   shopName: "立得相机店",
      // },
      // {
      //   count: 2,
      //   desc: "2018 新款女装上衣文艺棉麻短袖t恤 V领衫T恤女短袖女T桖",
      //   iid: "1j3sr2",
      //   img:
      //     "//s11.mogucdn.com/p2/170301/106341701_4kfgdd3001475k8h1l365al2k5ed6_640x960.jpg",
      //   price: "56.64",
      //   select: true,
      //   shopName: "立得相机店",
      // },
    ],
    filterCartList: [],
    totalPrice: 0,
    totalCount: 0
  },
  getters: {
    //选中的购物车列表
    filterCartList(state) {
      return state.filterCartList = state.cartList.filter((item) => {
        return item.select === true;
      });
    },
    //选中购物车的总价格
    filterCartListPrice(state) {
      let price;
      price = state.filterCartList.reduce((acc, item) => {
        return acc + item.count * item.price;
      }, 0);
      return state.totalPrice = price.toFixed(2)
    },
    //选中购物车的数量
    filterCartListCount(state) {
      let count;
      count = state.filterCartList.reduce((acc, item) => {
        return acc + item.count;
      }, 0);
      return state.totalCount = count
    },
    //购物车的商品种类
    cartListKind(state) {
      return state.cartList.length
    }
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
      state.cartList = plyload.cartList
    },
    RESET_CARTLIST_SELECT(state, plyload) {
      state.cartList.forEach((item) => {
        item.select = plyload.select;
      });
    },
    TOGGLE_CARTLIST_ITEM_SELECT(state, plyload) {
      state.cartList[plyload.index].select = plyload.select;
    },
    DELETE_SELECT_ITEM(state) {
      let filterArr = []
      let deleteArr = state.filterCartList;
      state.cartList.forEach((item) => {
        if (deleteArr.indexOf(item) === -1) {
          filterArr.push(item);
        }
      });
      state.cartList = filterArr;
    },
  },
  actions: {},
  modules: {},
});
