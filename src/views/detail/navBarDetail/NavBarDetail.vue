<template>
  <nav-bar class="nav-bar" ref="nav">
    <template #left>
      <div @click="backHome()">
        <svg-icon icon-class="left" class="left"></svg-icon>
      </div>
    </template>
    <template #center>
      <ul class="title">
        <li
          v-for="(item, index) in title"
          :key="item.id"
          :class="{ titleItem: currentIndx === index }"
          @click="selectItem(index)"
        >
          {{ item }}
        </li>
      </ul>
    </template>
  </nav-bar>
</template>

<script>
import SvgIcon from "@/components/svgIcon/SvgIcon";
import NavBar from "@/components/common/navBar/NavBar";
export default {
  name: "NavBarDetail",
  data() {
    return {
      currentIndx: 0,
      title: ["商品", "参数", "评论", "推荐"],
      tops: []
    };
  },
  methods: {
    selectItem(index) {
      this.currentIndx = index;
      //滚动到某块区域
      window.scrollTo({
        top: 2000,
        behavior: "smooth"
      });
    },
    backHome() {
      this.$router.push("/main/home");
    },
    getRefTop() {
      const paramsTop = this.$refs.params.$el.offsetTop;
      const commentTop = this.$refs.comment.$el.offsetTop;
      const recommendTop = this.$refs.recommend.$el.offsetTop;
      this.tops.push(0, paramsTop, commentTop, recommendTop);
    }
  },
  components: {
    NavBar,
    SvgIcon
  },
  mounted() {
    
  }
};
</script>

<style lang="scss" scoped>
.nav-bar {
  position: sticky;
  top: 0;
  z-index: 20;
  background-color: #fff;
  .left {
    font-size: 20px;
    fill: $mainColor;
  }
  .title {
    display: flex;
    justify-content: space-between;
    .titleItem {
      color: $mainColor;
    }
  }
}
</style>
