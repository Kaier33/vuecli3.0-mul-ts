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
    <p id="ellipsis2" ref="myRef">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, doloremque nesciunt voluptate explicabo consectetur velit quibusdam in. Cum quam ipsum atque eligendi quos reiciendis provident asperiores placeat corporis dicta voluptatum libero laudantium quidem iste voluptatem aut deleniti quisquam delectus, quia nam ipsa fugit dignissimos perspiciatis. Necessitatibus, praesentium. Harum hic eum atque nam quas quidem, id alias at non dolores, officiis inventore molestiae recusandae tempora exercitationem? Et eum facere soluta dolore? Iure eum expedita odio molestias eius unde veritatis cumque nemo, error architecto sint optio dolorem non omnis blanditiis ex voluptate, consequuntur dicta quis. Delectus, facere excepturi ipsa modi fugit in.</p>
    <hr />
    <hr />
    <hr />
    <Test ref="myCom" />

  </div>
</template>
<script lang='ts'>
// const $ = require("jquery");  //配合webpack

import { Vue, Component, Mixins } from "vue-property-decorator";
import "../assets/css/common-ignore.less";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
import appMixins from "../assets/ts/mixins";
import Test from "../components/test.vue";
import { resolve } from 'url';

@Component({
  name: "Home",
  components: { swiper, swiperSlide, Test }
})
export default class Home extends Mixins(appMixins) {
  $refs: {
    myRef: HTMLDivElement;
    // myCom: HTMLElement;
    myCom: Test;
  };
  msg: string = "Mua~";
  swiperOption: object = {
    loop: true,
    pagination: {
      el: ".swiper-pagination"
    }
  };

  // computed
  protected get MSG(): string {
    return `give you ${this.msg}`;
  }

  // lifecycle
  mounted() {
    // console.log((this.$router as any).options.routes);
    // console.log(this.$router.options);
    // console.log(this.$route);
    // console.log((this.$router as any).options);
    // console.log(window);

    // console.log(this.$refs.myRef as HTMLDivElement);
    // or
    // console.log(this.$refs.myRef);

    // console.log((this.$refs.myCom as any).sayComMua());
    // console.log(this.$refs.myCom.sayComMua());

    // const myAdd: (x: number, y: number) => number = function(x: number, y: number): number {
    //   return x + y;
    // };
    // console.log(myAdd(1, 2));

    // const myFetch = (url: string): Promise<Response> => {
    //   return fetch(url)
    //     .then((res) => res.json())
    //     .then((res) => {
    //       return res;
    //     });
    // };
    
    // myFetch('https://5b05a3968be5840014ce463b.mockapi.io/api/v1/record').then((res) => {
    //   console.log(res);
    // });

    
    // promise
    interface FetchArg {
       <T>(url: string, parms?: T): Promise<Response>;
    }
    // type test = <T>(url: string) => Promise<Response>;
    const startFetch: FetchArg = <T>(url: string, parms?: T): Promise<Response> => {
      return fetch(url)
        .then((res) => res.json())
        .then((res) => {
          return res;
        });
    };

    // const myFetch: (url: string) => Promise<Response> = function(url: string): Promise<Response> {
    const myFetch: (url: string) => Promise<Response> = (url: string): Promise<Response> => {
      return fetch(url)
        .then((res) => res.json())
        .then((res) => {
          return res;
        });
    };
    myFetch('https://5b05a3968be5840014ce463b.mockapi.io/api/v1/record').then((res) => {
      console.log(res);
    });

    //async
    const firPromise: (ms: number) => Promise<string> = function(ms: number): Promise<string> {
      return new Promise((resolve) => {
        setTimeout(resolve, ms , "Mua");
      });
    };
    async function myAsync() {
      const str = "Hi~ ";
      const res = await firPromise(3000);
      console.log(str + res);
      return str + res;
    }
    myAsync();

  }

  // methods
  sayMua(): void {
    console.log(`oh~~~~~ ${this.msg}`);
  }
  testJQ(): void {
    $("#test").html("我是JQ改的啦");
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
