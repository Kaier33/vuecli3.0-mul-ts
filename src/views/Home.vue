<template>
  <div>
    我是home
    <div class="box">box</div>
    <div class="test"> testbos</div>
    <br>
    <div class="line"></div>
    <br>
    <img src="../assets/images/logo.png">
    <br>
    <br>
    <p>{{MSG}}</p>
    <br>
    <button @click="sayMua">戳我啊ლ(′◉❥◉｀ლ)</button>
    <br>
    <br>
    <div id="homeSwiper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide>I'm Slide 1</swiper-slide>
        <swiper-slide>I'm Slide 2</swiper-slide>
        <swiper-slide>I'm Slide 3</swiper-slide>
        <swiper-slide>I'm Slide 4</swiper-slide>
        <swiper-slide>I'm Slide 5</swiper-slide>
        <swiper-slide>I'm Slide 6</swiper-slide>
        <swiper-slide>I'm Slide 7</swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
    <div id="test" @click="testJQ">我是原本的哦</div>

  </div>
</template>
<script lang='ts'>
import { Vue, Component } from 'vue-property-decorator';
import '../assets/css/common.less';
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
declare global {
  interface Window { $: any; jQuery: any; }
}

@Component({
  name: 'Home',
  components: { swiper, swiperSlide },
})
export default class Home extends Vue {
  public msg: string = 'Mua~';
  private swiperOption: object = {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
  };

  // computed
  get MSG(): string {
    return `give you ${this.msg}`;
  }

  // methods
  public sayMua(): void {
    alert(`oh~~~~~ ${this.msg}`);
  }
  public testJQ(): void {
    window.jQuery('#test').html('我是JQ改的啦');
  }

  // lifecycle
  public mounted() {
    console.log(this);
    console.log(window);
  }
}

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
#homeSwiper .swiper-slide {
  height: 100px;
}
#homeSwiper /deep/ .swiper-pagination-bullet {
  background: pink;
}
</style>
