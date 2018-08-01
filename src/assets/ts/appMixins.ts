
// import {isApp} from './env.js'
declare global {
  interface Window { vms: any; $options: any; }
}

import { Vue, Component } from 'vue-property-decorator';
@Component
export default class AppMixins extends Vue {
  public created() {
    // 混入
    const key = this.$options.name;
    window.vms = {};
    window.vms[key ? key : 'origin'] = this;
    // 禁止ios双击缩放
    (function disabledDoubleTouch() {
      let lastTouchEnd = 0;
      let now = null;
      document.addEventListener('touchend', function(event) {
        if (event.touches.length === 1) {
          now = new Date().getTime();
          if (now - lastTouchEnd <= 300) {
            event.preventDefault();
          }
          lastTouchEnd = now;
        }
      }, false);
    })();
  }
}
