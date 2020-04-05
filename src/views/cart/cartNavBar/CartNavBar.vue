<template>
  <nav-bar class="navbar">
    <template #center>
      购物车
    </template>
    <template #right>
      <span class="right" @click="clickManage()">{{manage}}</span>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "@/components/common/navBar/NavBar";
import { EventBus } from "@/utils/event-bus.js";

export default {
  name: "CartNavBar",
  components: {
    NavBar
  },
  data() {
    return {
      manage: "管理"
    };
  },
  methods: {
    clickManage() {
      let flag = this.manage === "管理";
      if (flag) {
        this.manage = "完成";
        EventBus.$emit("toggle-delete");
      } else {
        this.manage = "管理";
        EventBus.$emit("toggle-delete");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: $mainColor;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 2px;
  position: sticky;
  top: 0;
}
.right {
  font-size: 14px;
  font-weight: normal;
}
</style>
