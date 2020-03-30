<template>
  <div>
    <!-- nav-bar -->
    <nav-bar class="nav-bar">
      <template #left>
        <div @click="backHome()">
          <svg-icon icon-class="left" class="left"></svg-icon>
        </div>
      </template>
      <template #center>
        <ul class="title">
          <li v-for="(item, index) in title" :key="item.id" :class="{titleItem: currentIndx === index}" @click="selectItem(index)">{{item}}</li>
        </ul>
      </template>
    </nav-bar>
    <!-- swipe -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in swipeImg" :key="item.id">
        <img :src="item" :alt="item" class="swipeImg">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
//api
import { GetDetail } from "@/api/detail.js";
//组件
import SvgIcon from "@/components/svgIcon/SvgIcon";
import NavBar from "@/components/common/navBar/NavBar";
export default {
  name: "Detail",
  data() {
    return {
      iid: "",
      currentIndx: 0,
      title: ["商品", "参数", "评论", "推荐"],
      detailData: {},
      swipeImg: [],
    };
  },
  components: {
    NavBar,
    SvgIcon
  },
  methods: {
    selectItem(index) {
      this.currentIndx = index;
    },
    getDetail() {
      GetDetail(this.iid).then(response => {
        this.detailData = response.data.result;
        this.swipeImg = response.data.result.itemInfo.topImages;
      });
    },
    backHome() {
      this.$router.push("/main/home");
    }
  },
  created() {
    this.iid = this.$route.query.iid;
    this.getDetail();
  }
};
</script>

<style lang="scss" scoped>
.nav-bar {
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
.swipeImg {
  width: 100%;
  height: 350px;
  object-fit: cover;
}
</style>
