<template>
  <div id="main">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tab-bar>
      <tab-bar-item :path="item.path" :iconClass="item.svg" :text="item.text" v-for="(item, index) in tabBarData" :key="item.id" :class="{tabBarItem: currentIndex === index}" @click.native="selectItem(index)"></tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/tabBar/TabBar";
import TabBarItem from "@/components/tabBar/TabBarItem";
import { EventBus } from "@/utils/event-bus.js";
export default {
  name: "Main",
  data: function() {
    return {
      currentIndex: 0,
      tabBarData: [
        { svg: "home", text: "主页", path: "/main/home" },
        { svg: "category", text: "分类", path: "/main/category" },
        { svg: "cart", text: "购物车", path: "/main/cart" },
        { svg: "me", text: "我的", path: "/main/me" }
      ]
    };
  },
  methods: {
    selectItem(index) {
      this.currentIndex = index;
    }
  },
  components: {
    TabBar,
    TabBarItem
  },
  mounted() {
    EventBus.$on("main-index", (index) => {
      this.currentIndex = Number(index)
    })
  }
};
</script>

<style lang="scss" scoped>
.tabBarItem {
  color: $mainColor;
}
</style>
