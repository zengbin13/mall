<template>
  <div>
    <nav-bar class="home-nav-bar">
      <template #center>
        蘑菇街头
      </template>
    </nav-bar>
    主页
  </div>
</template>

<script>
import NavBar from "../../components/common/navBar/NavBar";
export default {
  name: "Home",
  components: {
    NavBar
  }
};
</script>

<style lang="scss" scoped>
.home-nav-bar {
  background-color: $mainColor;
  color: #fff;
  font-size: 18px;
  letter-spacing: 0.2rem;
}
</style>
