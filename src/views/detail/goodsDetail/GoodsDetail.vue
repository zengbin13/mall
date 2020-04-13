<template>
  <div class="goodsDetail">
    <div v-for="items in goodsDetail" :key="items.id">
      <span class="desc">{{ items.key }}</span>
      <div>
        <img v-lazy="item" :alt="item" v-for="item in items.list" :key="item.id" style="width:100%" @load="imgLoad()" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsDetail",
  props: {
    goodsDetail: {
      type: Array
    }
  },
  methods: {
    imgLoad() {
      this.$emit("img-load")
    }
  }
};
</script>

<style lang="scss" scoped>
.desc {
  display: inline-block;
  margin: 20px 0px;
  height: 25px;
  line-height: 25px;
  padding: 5px 20px;
  color: #fff;
  font-weight: 600;
  background-color: $secColor;
}
</style>
