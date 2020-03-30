<template>
  <div>
    <!-- navbar -->
    <nav-bar class="home-nav-bar">
      <template #center>
        蘑菇街头
      </template>
    </nav-bar>
    <!-- 轮播图 -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in swiperList" :key="item.id">
        <a :href="item.link"> <img :src="item.image" :alt="item.title" /></a>
      </van-swipe-item>
    </van-swipe>
    <!-- 推荐区 -->
    <recommend class="padding-top-4">
      <picture-item v-for="item in recommendList" :key="item.id" :link="item.link" :image="item.image" :text="item.title"></picture-item>
    </recommend>
    <!-- 流行区 -->
    <popular>
      <template #text>
        本周流行
      </template>
      <template #item>
        <picture-item v-for="item in recommendList" :key="item.id" :link="item.link" :image="item.image" :text="item.title"></picture-item>
      </template>
    </popular>
    <!-- 内容区 -->
    <van-tabs color="#ff699c" title-active-color="#ff699c" sticky id="top" v-model="current" animated>
      <van-tab title="流行">
        <keep-alive>
        <goods-list>
          <goods-list-item v-for="item in goods.pop.list" :key="item.id" :link="item.link" :image="item.show.img" :title="item.title" :price="Number(item.price)" :sale="Number(item.sale)" :iid="item.iid"></goods-list-item>
        </goods-list>
        </keep-alive>
      </van-tab>
      <van-tab title="新款">
        <keep-alive>
        <goods-list>
          <goods-list-item v-for="item in goods.new.list" :key="item.id" :link="item.link" :image="item.show.img" :title="item.title" :price="Number(item.price)" :sale="Number(item.sale)" :iid="item.iid"></goods-list-item>
        </goods-list>
        </keep-alive>
      </van-tab>
      <van-tab title="精选">
        <keep-alive>
        <goods-list>
          <goods-list-item v-for="item in goods.sell.list" :key="item.id" :link="item.link" :image="item.show.img" :title="item.title" :price="Number(item.price)" :sale="Number(item.sale)" :iid="item.iid"></goods-list-item>
        </goods-list>
        </keep-alive>
      </van-tab>
    </van-tabs>
    <!-- 回到顶部 -->
    <back-top v-show="isBackTop"></back-top>
  </div>
</template>

<script>
//api
import { GetHomeMultidata, GetHomeGoods } from "@/api/home.js";
//方法

//组件
import NavBar from "@/components/common/navBar/NavBar";
import Recommend from "./childrenCom/Recommend";
import PictureItem from "@/components/common/pictureItem/PictureItem";
import Popular from "./childrenCom/Popular";
import GoodsList from "@/components/goods/GoodsList";
import GoodsListItem from "@/components/goods/GoodsListItem";
import BackTop from "@/components/backTop/BackTop";

export default {
  name: "Home",
  data: function() {
    return {
      multidata: {},
      swiperList: [],
      recommendList: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      current: 0,
      type: ["pop", "new", "sell"],
      isBackTop: false,
      scrollHeight: 0,
      scrollTop: 0,
      clientHeight: 0,
      position: {
        x: 0,
        y: 0
      }
    };
  },
  components: {
    NavBar,
    Recommend,
    PictureItem,
    Popular,
    GoodsList,
    GoodsListItem,
    BackTop
  },
  methods: {
    //请求主页数据
    getHomeMultidata() {
      GetHomeMultidata().then(response => {
        this.multidata = response.data.data;
        this.swiperList = response.data.data.banner.list;
        this.recommendList = response.data.data.recommend.list;
      });
    },
    //请求主页商品数据
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      GetHomeGoods(type, page).then(response => {
        const list = response.data.data.list;
        this.goods[type].list.push(...list);
      });
    },
    //获取滚动数据 + 处理滚动的其他事件
    getScrollData() {
      this.scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      this.clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
      this.handleScroll();
    },
    //处理滚动的其他事件
    handleScroll() {
      this.toggleBackTop();
      this.pullingUp();
    },
    //控制backTop显示隐藏
    toggleBackTop() {
      this.isBackTop = this.scrollTop > 1500 ? true : false;
    },
    //上拉加载更多
    pullingUp() {
      let count = this.scrollTop + this.clientHeight - this.scrollHeight;
      if (Math.abs(count) < 1) {
        this.getHomeGoods(this.type[this.current]);
      }
    }
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // window.addEventListener("scroll", this.getScrollData, true);
    window.onscroll = this.getScrollData;
  },
  destroyed() {
    console.log("home destory");
  },
  activated() {
    window.scrollTo(this.position.x, this.position.y);
  },
  deactivated() {
    //记录位置信息
    this.position.y = this.scrollTop;
  }
};
</script>

<style lang="scss" scoped>
.home-nav-bar {
  background-color: $mainColor;
  color: #fff;
  font-size: 18px;
  letter-spacing: 0.2rem;
}
.van-swipe-item {
  img {
    width: 100%;
  }
}
</style>
