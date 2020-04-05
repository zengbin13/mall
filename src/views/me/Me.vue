<template>
  <div>
    <!-- nav bar -->
    <nav-bar class="navbar">
      <template #center>
        我的
      </template>
    </nav-bar>
    <!-- login -->
    <div class="login">
      <svg-icon icon-class="avatar" class="avatar"></svg-icon>
      <div class="info">
        <div>登录/注册</div>
        <div>
          <svg-icon icon-class="phone" class="phone"></svg-icon>
          <span>暂未绑定手机号</span>
        </div>
      </div>
    </div>
    <!-- integral -->
    <integral></integral>
    <!-- unit -->
    <unit-me></unit-me>

  </div>
</template>

<script>
import NavBar from '@/components/common/navBar/NavBar'
import SvgIcon from '../../components/svgIcon/SvgIcon'
import Integral from './integral/Integral'
import UnitMe from './unit/UnitMe'
export default {
  name: "Me",
  components: {
    NavBar,
    SvgIcon,
    Integral,
    UnitMe
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
.login {
  background-color: $mainColor;
  height: 100px;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0 20px;
  .avatar {
    width: 55px;
    height: 55px;
    border: 2px solid #999;
    border-radius: 50%;
    background-color: #fff;
  }
  .info {
    margin-left: 20px;
    color: #fff;
    div {
      padding: 5px 0;
    }
    .phone {
      font-size: 20px;
      margin-right: 5px;
      fill: #fff;
    }
  }
}
</style>
