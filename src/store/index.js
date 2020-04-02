import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cartList: []
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
    }
  },
  actions: {},
  modules: {}
});
