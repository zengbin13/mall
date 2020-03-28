<template>
  <div class="tab-bar-item" @click="pushRoute()">
    <svg-icon :iconClass="iconClass" class="svgIcon"></svg-icon>
    {{text}}
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    iconClass: {
      type: String
    },
    text: {
      type: String
    },
    path: {
      type: String
    }
  },
  methods: {
    pushRoute() {
      this.$router.push(this.path).catch((error) => error)
    }
  }
};
</script>

<style lang='scss' scoped>
  .tab-bar-item {
    width: 15%;
    text-align: center;
    .svgIcon {
      font-size: 24px;
      display: block;
      margin: 1px auto 2px;
    }
  }
</style>
