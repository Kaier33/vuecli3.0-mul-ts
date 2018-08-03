<template>
    <div class="articleItem">
        <div class="icon"></div>
        <div class="info">
            <div class="title" id="ellipsis2">新出行试车丨吴颖视频体验捷频体验捷频体验捷频体验频体验捷捷豹 I-PACE</div>
            <div class="other">评测 · 5 小时前 · 吴颖</div>
        </div>
    </div>
</template>
<script>
import "../../assets/css/common-ignore.less";
</script>
<style lang='less' scoped>
.articleItem {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  height: 78px;
  .icon {
    width: 110px;
    height: 70px;
    background-image: url("http://i4.article.fd.zol-img.com.cn/g5/M00/04/03/ChMkJlpgPuGISF3iAAFxP3ckvFkAAkLfgGYMngAAXFX214.jpg");
    background-size: cover;
    background-position: center;
    margin-right: 16px;
  }
  .info {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    .title {
      font-size: 14px;
      color: #333333;
      line-height: 26px;
    }
    .other {
      font-size: 10px;
      color: #858585;
    }
  }
}
</style>