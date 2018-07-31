<template>
  <div>
    我是home
    <div class="box">box</div>
    <div class="test"> testbos</div>
    <br>
    <br>
    <div class="line"></div>
    <br>
    <img src="../assets/images/logo.png">
  </div>
</template>
<script>
import '../assets/css/common.less';
export default {
  data() {
    return {};
  },
};
</script>
<style scoped lang='less'>
.box {
  width: 110px;
  height: 70px;
  background-color: yellowgreen;
}
.test {
  width: 220px;
  height: 220px; /*no*/
  background-color: pink;
  font-size: 20px;
}
</style>
