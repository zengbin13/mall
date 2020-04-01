<template>
  <div>
    <!-- nav-bar -->
    <nav-bar-detail></nav-bar-detail>
    <!-- swipe -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in swipeImg" :key="item.id">
        <img :src="item" :alt="item" class="swipeImg" />
      </van-swipe-item>
    </van-swipe>
    <!-- intemInfo -->
    <item-info
      :itemInfo="itemInfo"
      :columns="columns"
      class="after"
    ></item-info>
    <!-- shop info -->
    <shop-info :shopInfo="shopInfo" class="after"></shop-info>
    <!-- goods detail -->
    <goods-detail :goodsDetail="goodsDetail" class="after"></goods-detail>
    <!-- back top -->
    <back-top></back-top>
    <!-- item params -->
    <item-params ref="params" :itemParams="itemParams"></item-params>
    <!-- comment -->
    <comment ref="comment" :comment="comment"></comment>
    <!-- recommend -->
    <recommend ref="recommend" :recommend="recommend"></recommend>
  </div>
</template>

<script>
//api
import { GetDetail, GetRecommend } from "@/api/detail.js";
//组件
import NavBarDetail from "./navBarDetail/NavBarDetail";
import ItemInfo from "./itemInfo/ItemInfo";
import ShopInfo from "./shopInfo/ShopInfo";
import GoodsDetail from "./goodsDetail/GoodsDetail";
import BackTop from "../../components/backTop/BackTop";
import ItemParams from "./itemParams/ItemParams";
import Comment from "./comment/Comment";
import Recommend from "./recommend/Recommend";

export default {
  name: "Detail",
  data() {
    return {
      iid: "",
      detailData: {},
      swipeImg: [],
      itemInfo: {},
      columns: [],
      shopInfo: {},
      goodsDetail: [],
      itemParams: {},
      tops: [],
      comment: {},
      recommend: []
    };
  },
  components: {
    NavBarDetail,
    ItemInfo,
    ShopInfo,
    GoodsDetail,
    BackTop,
    ItemParams,
    Comment,
    Recommend
  },
  methods: {
    //获取请求数据
    getDetail() {
      GetDetail(this.iid).then(response => {
        this.detailData = response.data.result;
        this.swipeImg = response.data.result.itemInfo.topImages;
        this.itemInfo = response.data.result.itemInfo;
        this.columns = response.data.result.columns;
        this.shopInfo = response.data.result.shopInfo;
        this.goodsDetail = response.data.result.detailInfo.detailImage;
        this.itemParams = response.data.result.itemParams;
        this.comment = response.data.result.rate;
      });
    },
    //获取推荐数据
    getRecommend() {
      GetRecommend().then((response) => {
        this.recommend = response.data.data.list
      })
    },
    //获取scroll 距离
    getRefTop() {
      const paramsTop = this.$refs.params.$el.offsetTop;
      const commentTop = this.$refs.comment.$el.offsetTop;
      const recommendTop = this.$refs.recommend.$el.offsetTop;
      this.tops.push(0, paramsTop, commentTop, recommendTop);
    }
  },
  created() {
    this.iid = this.$route.query.iid;
    this.getDetail();
    this.getRecommend();
  },
  mounted() {
    this.getRefTop();
  }
};
</script>

<style lang="scss" scoped>
.swipeImg {
  width: 100%;
  height: 350px;
  object-fit: cover;
}
</style>
