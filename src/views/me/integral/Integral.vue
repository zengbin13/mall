<template>
  <ul class="after">
    <li>
      <div><span>0.00</span> 元</div>
      <div>余额</div>
    </li>
    <li>
      <div><span>0</span> 张</div>
      <div>优惠劵</div>
    </li>
    <li>
      <div><span>0</span> 分</div>
      <div>积分</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Integral",
  data() {
    return {
    }
  },
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  li {
    flex: 1;
    text-align: center;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    border-left: 1px solid rgba($color: #000000, $alpha: .1);
    div:first-child {
      padding: 20px 0 5px;
    }
    span {
      color: $secColor2;
      font-size: 18px;
      font-weight: 600;
    }
  }
  li:first-child {
    border: none;
  }
}
</style>
