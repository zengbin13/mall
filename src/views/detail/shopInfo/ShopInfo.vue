<template>
  <div class="shopInfo">
    <div class="shopName clearfix">
      <a :href="shopInfo.shopUrl">
        <img :src="shopInfo.shopLogo" :alt="shopInfo.shopLogo">
      </a>
      <div>
        <span class="name">{{shopInfo.name}}</span>
        <div class="icon">
          <svg-icon icon-class="crown" class="icon"></svg-icon>
          <svg-icon icon-class="medals" class="icon"></svg-icon>
        </div>
      </div>
    </div>
    <div class="desc">
      <div class="sale">
        <div class="fans">
          <div>{{shopInfo.cFans}}</div>
          <div>粉丝数</div>
        </div>
        <div class="sell">
          <div>{{shopInfo.cSells}}</div>
          <div>总销量</div>
        </div>
      </div>
      <div class="score">
        <div v-for="value in shopInfo.score" :key="value.id">
          <span>{{value.name}}:</span> <span class="lowlight" :class="{highlight: value.isBetter}">{{value.score.toFixed(2)}}</span> <span class="lowlight" :class="{highlight: value.isBetter}">{{value.isBetter | score }}</span>
        </div>
      </div>
    </div>
    <div class="button">
      <div class="goods">全部宝贝</div>
      <div class="enter">进店逛逛</div>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@/components/svgIcon/SvgIcon";
export default {
  name: "ShopInfo",
  props: {
    shopInfo: {
      type: Object
    }
  },
  data() {
    return {
      icons: ["crown", "medals"]
    };
  },
  computed: {
    iconLevel: function() {
      let count = 2 - this.shopInfo.level;
      return this.icons.split(0, count);
    }
  },
  filters: {
    score: function(value) {
      return value ? "高" : "低";
    }
  },
  components: {
    SvgIcon
  }
};
</script>

<style lang="scss" scoped>
.lowlight {
  text-shadow: 0px 2px 5px #c7c1b5;
}
.highlight {
  color: $mainColor;
  text-shadow: 0px 2px 5px #fdaa10;
}
.shopInfo {
  padding: 20px 10px 10px;
}
.shopName {
  height: 50px;
  img {
    float: left;
    width: 50px;
    border-radius: 10%;
  }
  .name {
    font-size: 16px;
    display: inline-block;
    padding: 5px 8px;
  }
  .icon {
    padding-left: 5px;
  }
}
.desc {
  display: flex;
  justify-content: space-around;
  font-size: 14px;
  color: $secText;
  padding-top: 5px;
  .score {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    & > div {
      padding: 5px 0;
    }
  }
  .sale {
    width: 40%;
    text-align: center;
    display: flex;
    justify-content: space-around;
    .fans,
    .sell {
      display: flex;
      justify-content: space-evenly;
      flex-direction: column;
    }
  }
}
.button {
  display: flex;
  justify-content: space-evenly;
  padding-top: 15px;
  .goods, .enter{
    border: 1px solid $mainColor;
    color: $mainColor;
    font-size: 14px;
    padding: 5px 10px;
    border-radius: 15px;
  }
}
</style>
