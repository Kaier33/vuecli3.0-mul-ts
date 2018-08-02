
declare global {
  interface Window { vms?: any; } //另一种可以 (window as any).vms = {};
}

import { Vue, Component } from 'vue-property-decorator';
@Component
export default class AppMixins extends Vue {
  $router?: any;  //没引入mixins,自己在组件声明
  created(): void {
    // 暴露 vue 给 window.vms
    const key = this.$options.name;
    window.vms = {};
    window.vms[key ? key : 'vue'] = this;
  }
}
