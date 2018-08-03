<template>
    <div class="screening-item">
        <img src="http://i4.article.fd.zol-img.com.cn/g5/M00/04/03/ChMkJlpgPuGISF3iAAFxP3ckvFkAAkLfgGYMngAAXFX214.jpg">
        <div class="info">
            <p class="info__carName">Model X（进口）</p>
            <p class="info__price">87.39 - 138.12万</p>
            <p class='info__type'>共 3 个车型 续航：507KM</p>
        </div>
    </div>
</template>
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
@Component({
    props: { resData: Object },
})
export default class ScreeningResultsList extends Vue { }
</script>

<style scoped lang='less'>
.screening-item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;

  width: 100%;
  img {
    display: block;

    margin-right: 20px;
    width: 110px;
    height: 70px;
  }
  .info {
    .info__carName {
      margin-bottom: 4px;
      font-size: 15px;
    }
    .info__price {
      margin-bottom: 11px;
      color: #f5a623;
      font-size: 14px;
    }
    .info__type {
      font-size: 10px;
      color: #858585;
    }
  }
}
</style>

