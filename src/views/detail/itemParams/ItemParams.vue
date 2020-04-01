<template>
  <div class="itemParams after" v-if="Object.keys(itemParams).length !== 0">
    <table class="rule">
      <tr v-for="tr in this.itemParams.rule.tables[0]" :key="tr.id">
        <td v-for="item in tr" :key="item.id">{{ item }}</td>
      </tr>
    </table>
    <table class="info">
      <tr v-for="tr in this.itemParams.info.set" :key="tr.id">
        <td class="key">{{ tr.key }}</td>
        <td class="value">{{ tr.value }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "ItemParams",
  props: {
    itemParams: {
      type: Object
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.itemParams {
  padding: 10px 20px;
}
.rule {
  margin-top: 20px;
  border-collapse: collapse;
  text-align: left;
  width: 100%;
  tr {
    border-bottom: 1px solid $bgColor;
    color: $mainText;
    height: 35px;
  }
}
.info {
  border-collapse: collapse;
  text-align: left;
  width: 100%;
  margin-top: 20px;
  tr {
    border-bottom: 1px solid $bgColor;
    color: $mainText;
    height: 35px;
  }
  .key {
    color: $mainColor;
    width: 30%;
  }
}
</style>
