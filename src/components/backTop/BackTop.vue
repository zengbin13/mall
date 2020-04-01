<template>
  <div>
    <a class="backTop" @click="clickBack()" v-show="isShow">
      <svg-icon icon-class="arrow" class="arrow"></svg-icon>
    </a>
  </div>
</template>

<script>
import SvgIcon from "../svgIcon/SvgIcon";
export default {
  name: "BackTop",
  props: {
    showHeight: {
      type: Number,
      default: 2500
    },
    top: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      scrollTop: 0,
    };
  },
  computed: {
    isShow() {
      return this.scrollTop > this.showHeight ? true : false
    }
  },
  components: {
    SvgIcon
  },
  methods: {
    handerScroll() {
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    },
    clickBack() {
      window.scrollTo({
        top: this.top,
        behavior: "smooth"
      });
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handerScroll);
  }
};
</script>

<style lang="scss" scoped>
.backTop {
  display: block;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: rgba($color: #000000, $alpha: 0.2);
  position: fixed;
  bottom: 80px;
  right: 10px;
}
.arrow {
  fill: $mainColor;
  font-size: 32px;
  position: relative;
  top: 6px;
  left: 6px;
}
</style>
