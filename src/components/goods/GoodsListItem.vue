<template>
  <div class="goodsItem">
    <figure>
      <a :href="link">
        <img :src="image" :alt="title">
      </a>
      <figcaption>{{title}}</figcaption>
    </figure>
    <div class="info">
      <span class="price"><span>￥</span><span class="number">{{price}}</span></span>
      <span class="sale">{{sale}}人已购买</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    link: {
      type: String
    },
    image: {
      type: String
    },
    title: {
      type: String
    },
    price: {
      type: Number
    },
    sale: {
      type: Number
    }
  }
};
</script>

<style lang="scss" scoped>
.goodsItem {
  width: 45%;
  border-radius: 10px;
  background-color: #fff;
  overflow: hidden;
  margin-top: 12px;
  font-size: 13px;
  line-height: 20px;

  figure {
    margin: 0;
    img {
      width: 100%;
      height: 200px;
      @include webkit(object-fit, cover);
    }
    figcaption {
      display: block;
      width: 100%;
      box-sizing: border-box;
      height: 40px;
      overflow: hidden;
      letter-spacing: 0.5px;
      padding: 0 10px;
    }
  }
  .info {
    margin: 4px 0;
    padding: 0 10px;
    .price {
      color: $mainColor;
      .number {
        font-size: larger;
      }
    }
    .sale {
      display: inline-block;
      margin-left: 5px;
      font-size: 12px;
      color: $mainText;
    }
  }
}
@media screen and (min-width: 768px){
  .goodsItem {
    width: 23%;
  }
}
</style>
