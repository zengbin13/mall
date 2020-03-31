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
    <!-- intemInfo -->
    <item-info :itemInfo="itemInfo" :columns="columns" class="after"></item-info>
    <!-- shop info -->
    <shop-info :shopInfo="shopInfo" class="after"></shop-info>
    <!-- goods detail -->
    <goods-detail :goodsDetail="goodsDetail" class="after"></goods-detail>
    <!-- back top -->
    <back-top></back-top>
  </div>
</template>

<script>
//api
import { GetDetail } from "@/api/detail.js";
//组件
import SvgIcon from "@/components/svgIcon/SvgIcon";
import NavBar from "@/components/common/navBar/NavBar";
import ItemInfo from "./itemInfo/ItemInfo";
import ShopInfo from "./shopInfo/ShopInfo";
import GoodsDetail from "./goodsDetail/GoodsDetail";
import BackTop from "../../components/backTop/BackTop";
export default {
  name: "Detail",
  data() {
    return {
      iid: "",
      currentIndx: 0,
      title: ["商品", "参数", "评论", "推荐"],
      detailData: {},
      swipeImg: [],
      itemInfo: {},
      columns: [],
      shopInfo: {},
      goodsDetail: {}
    };
  },
  components: {
    NavBar,
    SvgIcon,
    ItemInfo,
    ShopInfo,
    GoodsDetail,
    BackTop
  },
  methods: {
    selectItem(index) {
      this.currentIndx = index;
    },
    getDetail() {
      GetDetail(this.iid).then(response => {
        this.detailData = response.data.result;
        this.swipeImg = response.data.result.itemInfo.topImages;
        this.itemInfo = response.data.result.itemInfo;
        this.columns = response.data.result.columns;
        this.shopInfo = response.data.result.shopInfo;
        this.goodsDetail = response.data.result.detailInfo.detailImage[0];
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
.swipeImg {
  width: 100%;
  height: 350px;
  object-fit: cover;
}
</style>