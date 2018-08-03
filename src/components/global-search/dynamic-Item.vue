<template>
    <div class="groupDynamic">
        <!-- 顶部用户信息 -->
        <div class="userInfo">
            <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3744872283,1870099043&fm=27&gp=0.jpg">
            <p class="username">Victoria</p>
            <p class="time">2018-2-5</p>
        </div>
        <!-- 内容区域 -->
        <div class="dynamicContentBox mb20">
            <!-- 文本 -->
            <p class="dynamicContent">
                model 3 今天给预约了的老车主参观，趁着有时间就过去看啦，感觉还不错。 大雄，作业交完了😁😁不要嫌我文笔差哈……
            </p>
            <!-- 图片 -->
            <div class="imgList">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
                <p class="total">8</p>
            </div>
        </div>
        <!-- <OnePxLine /> -->
    </div>
</template>
<script>
</script>
<style lang='less' scoped>
.groupDynamic {
  // 用户信息
  .userInfo {
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-items: center;
    font-size: 10px;
    color: #858585;
    margin-bottom: 16px;
    img {
      display: inline-block;
      width: 20px;
      height: 20px;
      border-radius: 100%;
      margin-right: 9px;
    }
    .username {
      font-size: 14px;
      color: #333333;
    }
    .time {
      flex: 1;
      text-align: right;
    }
  }
  // 内容区域
  .dynamicContentBox {
    width: 100%;
    padding: 10px;
    background: #fafafa;
    // 文本
    .dynamicContent {
      font-size: 13px;
      color: #333333;
    }
    // 图片列表
    .imgList {
      position: relative;
      top: 0;
      ul {
        display: flex;
        flex-wrap: nowrap;
        justify-content: flex-start;
        margin-top: 10px;
        li {
          width: 77px;
          height: 77px;
          background-image: url("http://i4.article.fd.zol-img.com.cn/g5/M00/04/03/ChMkJlpgPuGISF3iAAFxP3ckvFkAAkLfgGYMngAAXFX214.jpg");
          background-size: cover;
          background-position: center;
          margin-right: 5px;
        }
        li:last-child {
          margin-right: 0 !important;
        }
      }
      .total {
        position: absolute;
        right: 5px;
        bottom: 0;
        font-size: 12px;
        color: #fff;
      }
    }
  }
}
.mb20 {
  margin-bottom: 20px;
}
</style>