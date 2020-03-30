<template>
  <div id="app">
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
export default {
  name: "App",
  data: function() {
    return {
      currentIndex: 0,
      tabBarData: [
        { svg: "home", text: "主页", path: "/home" },
        { svg: "category", text: "分类", path: "/category" },
        { svg: "cart", text: "购物车", path: "/cart" },
        { svg: "me", text: "我的", path: "/me" }
      ]
    };
  },
  methods: {
    selectItem(index) {
      this.currentIndex = index
    }
  },
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style lang="scss" scoped>
.tabBarItem {
  color: $mainColor;
}
</style>
