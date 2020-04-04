<template>
  <div>
    <!-- nav bar -->
    <nav-bar class="navbar">
      <template #center>
        分类
      </template>
    </nav-bar>
    <!-- content -->
    <category-content :category-list="categoryData.list"></category-content>
  </div>
</template>

<script>
import { GetCategory, GetSubCategory } from "../../api/category";
import NavBar from "../../components/common/navBar/NavBar";
import CategoryContent from "./content/CategoryContent";


export default {
  name: "Category",
  data() {
    return {
      categoryData: {}
    }
  },
  components: {
    NavBar,
    CategoryContent
  },
  methods: {
    getCategory() {
      GetCategory().then((response) => {
        this.categoryData = response.data.data.category
      })
    }
  },
  mounted() {
    this.getCategory()
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  background-color: $mainColor;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 2px;
  position: sticky;
  top: 0;
}
</style>
