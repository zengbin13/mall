<template>
  <div class="item">
    <a :href="link">
      <img :src="image" :alt="text">
    </a>
    <span>{{text}}</span>
  </div>
</template>

<script>
export default {
  name: "PictureItem",
  props: {
    image: {
      type: String
    },
    text: {
      type: String
    },
    link: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  width: 25%;
  text-align: center;
  color: $mainText;
  font-size: 14px;
  margin-bottom: 20px;
  img {
    display: block;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    margin: 0px auto 7px;
  }
}
</style>
