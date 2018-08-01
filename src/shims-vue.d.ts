declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

declare module 'vue/types/vue' {
  interface Vue {
    $xxx: any, //预留
  }
  interface window {
    $: any,
    jQuery:any
  }
}

declare module 'vue-awesome-swiper' {
  export const swiper: any
  export const swiperSlide: any
}


// declare module 'jquery';






