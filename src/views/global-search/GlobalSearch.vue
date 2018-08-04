// 全局搜索
<template>
    <div class="container">
        <!-- 品牌车系 -->
        <div class="carlist-box mb30">
            <CommonTop class="mb30" />
            <CarList v-for="(item,index) in screeningList" :key="index" class="mb20" />
        </div>

        <!-- 小组动态 -->
        <div class="grouplist-box mb30">
            <CommonTop class="mb30" />
            <GroupDynamicItem />
        </div>

        <!-- 文章 -->
        <div class="article-box mb30">
            <CommonTop class="mb30" />
            <ArticleItem v-for="(item,index) in [0,1,2]" :key='index' class="mb40" />
        </div>

        <!-- notice -->
        <p v-if="loadOver" class="load-over">已加载完所有内容</p>

    </div>
</template>
<script lang='ts'>
import appMixins from "@/assets/ts/mixins";
import CommonTop from "@/components/global-search/search-top.vue"; //公共顶部
import GroupDynamicItem from "@/components/global-search/dynamic-item.vue"; //小组动态
import ArticleItem from "@/components/global-search/article-item.vue"; //文章列表
import CarList from "@/components/screening/screening-results-list.vue"; //车系列表

import { Vue, Component, Mixins } from "vue-property-decorator";

@Component({
  name: "GlobalSearch",
  components: { CommonTop, CarList, GroupDynamicItem, ArticleItem },
})
export default class GlobalSearch extends Mixins(appMixins) {
  loadOver: boolean = false;
  screeningList: object[] = [{ a: 1 }, { b: 2 }, { c: 2 }];

  get count(): number {
    return 233;
  }

  mounted() {
    // console.log(window);
  }

  loadMore<T>(data: T[]): void {
    if (data.length === 0) {
      this.loadOver = true;
    } else {
      this.screeningList.concat(data);
    }
  }
}
</script>

<style scoped lang='less'>
.container {
  position: relative;
  margin-top: 20px;
  padding: 0 15px;
  width: 100%;
  box-sizing: border-box;
}
.mb20 {
  margin-bottom: 20px;
}
.mb30 {
  margin-bottom: 30px;
}
.mb40 {
  margin-bottom: 40px;
}
.load-over {
  text-align: center;
  color: #c6c6c6;
}

// 品牌车系
// .carlist-box {
// }

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
</style>

