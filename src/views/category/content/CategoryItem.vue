<template>
  <div class="categoryItem">
    <figure v-for="item in categoryItem" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" :alt="item.image">
      </a>
      <figcaption>{{item.title}}</figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  name: "CategoryItem",
  props: {
    categoryItem: {
      type: Array
    }
  }
};
</script>

<style lang="scss" scoped>
.categoryItem {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
figure {
  width: 26%;
  margin: 0;
  text-align: center;
  margin-top: 20px;
  font-size: 13px;
  img {
    width: 60px;
  }
  figcaption {
    display: inline-block;
    margin-top: 6px;
    color: $mainText;
  }
}
</style>
