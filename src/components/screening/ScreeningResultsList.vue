<template>
    <div class="screening_item">
        <img src="http://i4.article.fd.zol-img.com.cn/g5/M00/04/03/ChMkJlpgPuGISF3iAAFxP3ckvFkAAkLfgGYMngAAXFX214.jpg">
        <div class="car_info">
            <p class="carName">Model X（进口）</p>
            <p class="price">87.39 - 138.12万</p>
            <p class='type'>共 3 个车型 续航：507KM</p>
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
.screening_item {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  width: 100%;
  img {
    display: block;
    width: 110px;
    height: 70px;
    margin-right: 20px;
  }
  .car_info {
    .carName {
      font-size: 15px;
      margin-bottom: 4px;
    }
    .price {
      font-size: 14px;
      color: #f5a623;
      margin-bottom: 11px;
    }
    .type {
      font-size: 10px;
      color: #858585;
    }
  }
}
</style>

