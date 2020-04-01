<template>
  <div class="recommend">
    <goods-list-item
      v-for="item in recommend"
      :key="item.id"
      :link="item.item_url"
      :image="item.image"
      :title="item.title"
      :price="Number(item.price)"
      :sale="Number(item.itemSale)"
      iid="1lrzvr8"
    ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "../../../components/goods/GoodsListItem";
export default {
  name: "Recommend",
  props: {
    recommend: {
      type: Array
    }
  },
  components: {
    GoodsListItem
  }
};
</script>

<style lang="scss" scoped>
.recommend {
  background-color: $bgColor;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-bottom: 20px;
}
</style>
