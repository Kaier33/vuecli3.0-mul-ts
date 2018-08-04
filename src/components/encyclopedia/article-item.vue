// 百科的 文章样式
<template>
    <div class="article-item">
        <div class="icon"></div>
        <div class="info">
            <div class="title" id="ellipsis2">出行情报局 | 特斯拉 Model 3 产能恢复 或 2019 年开始asdasdasdad国内交付</div>
            <div class="other">说到纯电动汽车就不得不提特斯拉了，作为asdasdasd纯…</div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
<style lang='less' scoped>
.article-item {
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
    width: 217px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    box-sizing: border-box;
    .title {
      font-size: 14px;
      color: #333333;
      line-height: 26px;
    }
    .other {
      font-size: 10px;
      color: #858585;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}
</style>