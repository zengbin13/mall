<template>
  <div class="category">
    <ul class="aside">
      <li v-for="(item, index) in categoryList" :key="item.id" :class="{active: index === currentIndex}" @click="activeItem(index, item.maitKey)">{{item.title}}</li>
    </ul>
    <div class="content">
      <category-item :category-item="itemList"></category-item>
    </div>
  </div>
</template>

<script>
import { GetSubcategory } from "@/api/category";
import CategoryItem from "./CategoryItem";
export default {
  name: "Content",
  props: {
    categoryList: {
      type: Array
    }
  },
  data() {
    return {
      currentIndex: 0,
      maitKey: "3627",
      itemList: []
    };
  },
  components: {
    CategoryItem
  },
  methods: {
    activeItem(index, maitKey) {
      //修改样式
      this.currentIndex = index;
      //修改数据接口
      this.maitKey = maitKey
      this.getSubCategory()
    },
    getSubCategory() {
      GetSubcategory(this.maitKey).then(response => {
        this.itemList = response.data.data.list
      });
    }
  },
  mounted() {
    this.getSubCategory();
  }
};
</script>

<style lang="scss" scoped>
.category {
  display: flex;
  justify-content: start;
}
.active {
  background-color: #fff;
  color: $mainColor;
  border-left: 3px solid $mainColor;
}
ul {
  li {
    font-size: 14px;
    width: 100px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    background-color: $bgColor;
    border-left: 3px solid $bgColor;
    box-sizing: border-box;
  }
}
</style>
