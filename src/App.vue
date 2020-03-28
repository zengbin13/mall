<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item
        :path="item.path"
        :iconClass="item.svg"
        :text="item.text"
        v-for="item in tabBarData"
        :key="item.id"
        class="tabBarItem"
      ></tab-bar-item>
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
      tabBarData: [
        { svg: "home", text: "主页", path: "/home" },
        { svg: "category", text: "分类", path: "/category" },
        { svg: "cart", text: "购物车", path: "/cart" },
        { svg: "me", text: "我的", path: "/me" }
      ]
    };
  },
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style lang="scss" scoped>
.tabBarItem {
  &:hover {
    color: $mainColor;
  }
}
</style>
