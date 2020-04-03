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
      //   shopName: "立得相机店"
      // },
      // {
      //   count: 2,
      //   desc: "2018 新款女装上衣文艺棉麻短袖t恤 V领衫T恤女短袖女T桖",
      //   iid: "1j3sr2",
      //   img:
      //     "//s11.mogucdn.com/p2/170301/106341701_4kfgdd3001475k8h1l365al2k5ed6_640x960.jpg",
      //   price: "56.64",
      //   select: true,
      //   shopName: "立得相机店"
      // }
    ]
  },
  mutations: {
    ADD_CART(state, plyload) {
      let count = state.cartList.findIndex(element => {
        //记得return
        return element.iid === plyload.info.iid;
      });
      if (count === -1) {
        state.cartList.push(plyload.info);
      } else {
        state.cartList[count] = plyload.info;
      }
    },
    RESET_CARTLIST_SELECT(state, plyload) {
      state.cartList.forEach(item => {
        item.select = plyload.select;
      });
    },
    TOGGLE_CARTLIST_ITEM_SELECT(state, plyload) {
      state.cartList[plyload.index].select = plyload.select;
    }
  },
  actions: {},
  modules: {}
});
