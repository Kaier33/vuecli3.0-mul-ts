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
    <br>
    <p id="ellipsis2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, doloremque nesciunt voluptate explicabo consectetur velit quibusdam in. Cum quam ipsum atque eligendi quos reiciendis provident asperiores placeat corporis dicta voluptatum libero laudantium quidem iste voluptatem aut deleniti quisquam delectus, quia nam ipsa fugit dignissimos perspiciatis. Necessitatibus, praesentium. Harum hic eum atque nam quas quidem, id alias at non dolores, officiis inventore molestiae recusandae tempora exercitationem? Et eum facere soluta dolore? Iure eum expedita odio molestias eius unde veritatis cumque nemo, error architecto sint optio dolorem non omnis blanditiis ex voluptate, consequuntur dicta quis. Delectus, facere excepturi ipsa modi fugit in.</p>

  </div>
</template>
<script lang='ts'>
import { Vue, Component, Mixins } from "vue-property-decorator";
import "../assets/css/common_ignore.less";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import appMixins from "../assets/ts/appMixins";

// 其实不需要声明,只是不这样的话 在vscode下有个红线看着不爽罢了
declare global {
  export const $: any;
}

@Component({
  name: "Home",
  components: { swiper, swiperSlide },
})
export default class Home extends Mixins(appMixins) {
  msg: string = "Mua~";
  private swiperOption: object = {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
    },
  };

  // computed
  get MSG(): string {
    return `give you ${this.msg}`;
  }

  // methods
  sayMua(): void {
    console.log(`oh~~~~~ ${this.msg}`);
  }
  testJQ(): void {
    $("#test").html("我是JQ改的啦");
  }

  // lifecycle
  mounted() {
    // console.log(this);
    // console.log(window);
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
