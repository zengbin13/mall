<template>
  <div>
    <div class="unit" v-for="(item, index) in unitData" :key="index" :class="{after: item.after}">
      <svg-icon :icon-class="item.icon" class="icon"></svg-icon>
      <span>{{item.content}}</span>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar";
export default {
  name: "Unit",
  data() {
    return {
      unitData: [
        { icon: "message", content: "我的信息", after: false },
        { icon: "integral", content: "积分商城", after: false },
        { icon: "vip", content: "会员卡", after: true },
        { icon: "cart", content: "我的购物车", after: false },
        { icon: "download", content: "下载APP", after: true }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.unit {
  border-bottom: 1px solid rgba($color: #000000, $alpha: 0.1);
  padding: 12px 20px;
  color: $mainText;
}
.icon {
  margin-right: 12px;
  font-size: 20px;
}
</style>
