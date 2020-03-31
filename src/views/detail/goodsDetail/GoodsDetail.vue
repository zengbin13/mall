<template>
  <div class="goodsDetail">
    <span class="desc">{{goodsDetail.key}}</span>
    <div>
      <img :src="item" :alt="item" v-for="item in goodsDetail.list" :key="item.id" style="width:100%">
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsDetail",
  props: {
    goodsDetail: {
      type: Object
    }
  },
};
</script>

<style lang="scss" scoped>
.desc {
  display: inline-block;
  margin: 20px 0px;
  height: 25px;
  line-height: 25px;
  padding: 5px 20px;
  color: #000;
  background-color: rgba(0, 0, 0, .2);
}
</style>
