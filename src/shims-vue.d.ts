
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

<<<<<<< Updated upstream
declare let $: (any: string) => any;

=======
// declare let $:any;
>>>>>>> Stashed changes

// declare module 'vue/types/vue' {
//   import { Route } from 'vue-router';
//   import VueRouter from 'vue-router';
//   interface Vue {
//     $router: VueRouter;
//     $route: Route;
//   }
// }











