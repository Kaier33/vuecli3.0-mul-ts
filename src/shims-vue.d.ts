// ts识别vue
declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

// 为一些没有.d.ts的插件做声明
declare module 'vue-awesome-swiper' { 
  export const swiper: any;
  export const swiperSlide: any;
}

declare module 'vue/types/vue' {
  interface Vue {
    $xxx: any; //为$ref预留,
  }
}







