// 新出行百科
<template>
    <div>
        <!-- cover -->
        <div class="cover"></div>

        <!-- main -->
        <div class="container">

            <!-- 顶部信息 -->
            <div class="top-info">
                <div class="title">
                    <p>{{this.resData.cyclopediaType[0].title1}}</p>
                    <p>更新至 23 期</p>
                </div>
                <!-- 固定内容 -->
                <p class="constant1"> {{this.resData.cyclopediaType[0].title2}} </p>
                <p class="constant2"> {{this.resData.cyclopediaType[0].title3}} </p>
            </div>

            <div class="one-px-line"></div>

            <!-- article list -->
            <ArticleItem v-for="(item,index) in resData.articleList" :key="index" class="mt30" />

            <!-- notice -->
            <div v-if="loadOver " class="load-over">
                <div class="line mt30 mb20"></div>
                <p class="mb20">已加载完所有内容</p>
            </div>
        </div>
    </div>

</template>
<script lang='ts'>
import "../../assets/css/common-ignore.less";
import appMixins from "@/assets/ts/mixins";
import ArticleItem from "@/components/encyclopedia/article-item.vue"; // 文章

import { Vue, Component, Mixins } from "vue-property-decorator";
@Component({
  name: "Encyclopedia",
  components: { ArticleItem }
})
export default class Encyclopedia extends Mixins(appMixins) {
  loadOver: boolean = false;
  resData: object = {
    articleList: [{ a: 1 }, { b: 2 }, { c: 2 }],
    cyclopediaType: [
      {
        title1: "出行情报局",
        title2: "记录报道车事详情，剖析政策优惠，收集分享行业情报信息。",
        title3: "解读优惠政策 事件记录跟踪"
      },
      {
        title1: "新能源小窍门",
        title2: "科普电动汽车使用小窍门，教你怎么选车购车更省钱。",
        title3: "新能源车 实用科普导购"
      },
      {
        title1: "新出行试车",
        title2: "新出行第一视角体验新车，更快速、更专业。",
        title3: "快速解析 秒懂车系"
      }
    ]
  };

  mounted() {
    // console.log(window);
  }

  getData(data: {}) {
    this.resData = Object.assign({}, data);
  }

  loadMore(data = { item: [] }): void {
    if (data.item.length === 0) {
      this.loadOver = true;
    } else {
      (this.resData as any).articleList.concat(data);
    }
  }
}
</script>

<style scoped lang='less'>
.cover {
  background-image: url("http://i4.article.fd.zol-img.com.cn/g5/M00/04/03/ChMkJlpgPuGISF3iAAFxP3ckvFkAAkLfgGYMngAAXFX214.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 230px;
}

.container {
  position: relative;
  padding: 0 15px;
  width: 100%;
  box-sizing: border-box;
  .top-info {
    .title {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      p:first-child {
        font-size: 22px;
        color: #333333;
      }
      p:last-child {
        box-sizing: border-box;
        padding: 0.5% 1%;
        height: 18px;
        font-size: 10px;
        color: #ffffff;
        background: #febc00;
        border-radius: 2px;
      }
    }
    .constant1 {
      font-size: 10px;
      color: #858585;
      margin-bottom: 6px;
    }
    .constant2 {
      font-size: 14px;
      color: #f5a623;
      margin-bottom: 40px;
    }
  }
}

.mt30 {
  margin-top: 30px;
}
.mb20 {
  margin-bottom: 20px;
}
.load-over {
  text-align: center;
  color: #c6c6c6;
}
</style>

