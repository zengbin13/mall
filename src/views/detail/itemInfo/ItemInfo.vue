<template>
  <div class="itemInfo">
    <div class="d-price">
      <div class="price">
        <span class="highNowPrice">{{itemInfo.highNowPrice}}</span>
        <span class="discountDesc">{{itemInfo.discountDesc || "火热促销"}}</span>
      </div>
      <div class="highPrice">
        <span>价格: ￥</span>
        <span class="high">{{itemInfo.highPrice}}</span>
      </div>
    </div>
    <div class="desc">
      <p class="title">{{itemInfo.title}}</p>
      <span class="share">
        <svg-icon icon-class="share"></svg-icon>分享
      </span>
    </div>
    <div class="sale">
      <span v-for="item in columns" :key="item.id">{{item}}</span>
    </div>
  </div>
</template>

<script>
import SvgIcon from "@/components/svgIcon/SvgIcon";
export default {
  name: "ItemInfo",
  props: {
    itemInfo: {
      type: Object
    },
    columns: {
      type: Array
    }
  },
  components: {
    SvgIcon
  }
};
</script>

<style lang="scss" scoped>
.itemInfo {
  padding: 20px 10px 10px;
}
.d-price {
  .price {
    .highNowPrice {
      color: $mainColor;
      font-size: 20px;
      font-weight: normal;
      &::before {
        content: "￥ ";
        font-size: 16px;
      }
    }
    .discountDesc {
      display: inline-block;
      margin-left: 5px;
      padding: 2px 7px;
      font-size: 10px;
      color: $mainColor;
      text-shadow: 0px 2px 5px rgb(253, 170, 16);
      border-radius: 10px;
      letter-spacing: 1px;
    }
  }
  .highPrice {
    color: $secText;
    font-size: 10px;
    padding-top: 2px;
    margin-left: 2px;
    .high {
      text-decoration: line-through;
    }
  }
}
.desc {
  font-size: 0;
  margin-top: 12px;
  position: relative;
  .title {
    display: inline-block;
    margin: 0;
    width: 88%;
    height: 40px;
    font-size: 15px;
    font-weight: 600;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .share {
    position: absolute;
    right: -10px;
    top: 12px;
    font-size: 14px;
    display: inline-block;
    color: $secText;
    background-color: rgba($color: #999, $alpha: .1);
    padding: 3px 5px 3px 5px;
    border-radius: 20px 0px 0px 20px;
  }
}
.sale {
  padding-top: 10px;
  display: flex;
  justify-content: space-between;
  span {
    font-size: 13px;
    color: $secText
  }
}
</style>
