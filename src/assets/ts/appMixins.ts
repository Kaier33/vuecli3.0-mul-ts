
declare global {
  interface Window { vms?: any; } //另一种可以 (window as any).vms = {};
}

import { Vue, Component } from 'vue-property-decorator';
@Component
export default class AppMixins extends Vue {
  created(): void {
    // 暴露 vue 给window
    const key = this.$options.name;
    window.vms = {};
    window.vms[key ? key : 'origin'] = this;
    // Safari 禁用双击缩放
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
