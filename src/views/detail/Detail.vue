<template>
  <div>
    <!-- nav-bar -->
    <nav-bar-detail @nav-bar=navBarClick ref="navbar"></nav-bar-detail>
    <!-- swipe -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in swipeImg" :key="item.id">
        <img :src="item" :alt="item" class="swipeImg" />
      </van-swipe-item>
    </van-swipe>
    <!-- intemInfo -->
    <item-info :itemInfo="itemInfo" :columns="columns" class="after"></item-info>
    <!-- shop info -->
    <shop-info :shopInfo="shopInfo" class="after"></shop-info>
    <!-- goods detail -->
    <goods-detail :goodsDetail="goodsDetail" class="after" @img-load="imgLoad()"></goods-detail>
    <!-- back top -->
    <back-top></back-top>
    <!-- item params -->
    <item-params ref="params" :itemParams="itemParams"></item-params>
    <!-- comment -->
    <comment ref="comment" :comment="comment"></comment>
    <!-- recommend -->
    <recommend ref="recommend" :recommend="recommend" class="recommend"></recommend>
    <!-- cart bar -->
    <cart-bar :info="info"></cart-bar>
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
import CartBar from "./cartBar/CartBar";
//方法
import { debounce } from "../../utils/common.js";

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
      recommend: [],
    };
  },
  computed: {
    info: function() {
      return {
        iid: this.iid,
        shopName: this.shopInfo.name,
        img: this.swipeImg[0],
        desc: this.itemInfo.title,
        price: this.itemInfo.highNowPrice,
        count: 0
      }
    }
  },
  components: {
    NavBarDetail,
    ItemInfo,
    ShopInfo,
    GoodsDetail,
    BackTop,
    ItemParams,
    Comment,
    Recommend,
    CartBar
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
        this.$nextTick(() => {
          //DOM渲染完毕图片未加载完
          // this.getRefTop();
        });
      });
    },
    //获取推荐数据
    getRecommend() {
      GetRecommend().then(response => {
        this.recommend = response.data.data.list;
      });
    },
    //navbar点击
    navBarClick(index) {
      window.scrollTo({
        top: this.tops[index],
        behavior: "smooth"
      });
    },
    //图片加载完成
    imgLoad() {
      this.getRefTop();
    },
    //获取scroll 距离
    getRefTop() {
      this.tops = [];
      const navBarTop = this.$refs.navbar.$el.offsetHeight;
      this.tops.push(0);
      this.tops.push(this.$refs.params.$el.offsetTop - navBarTop);
      this.tops.push(this.$refs.comment.$el.offsetTop - navBarTop);
      this.tops.push(this.$refs.recommend.$el.offsetTop - navBarTop);
      // console.log(this.tops);
      // console.log(this.$refs);
    }
  },
  created() {
    this.iid = this.$route.query.iid;
    this.getDetail();
    this.getRecommend();
  },
  mounted() {
    //可能请求的数据还未接受成功  组件的v-if未渲染组件 为undefined
    // this.getRefTop();
  },
  updated() {
    // this.getRefTop();
  }
};
</script>

<style lang="scss" scoped>
.swipeImg {
  width: 100%;
  height: 350px;
  object-fit: cover;
}
.recommend {
  margin-bottom: 49px;
  padding-bottom: 20px;
}
</style>
