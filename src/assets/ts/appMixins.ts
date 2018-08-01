
// import {isApp} from './env.js'
declare global {
  interface Window { vms?: any; $options?: any; }
}

import { Vue, Component } from 'vue-property-decorator';
@Component({})
export default class AppMixins extends Vue {
  public self = this;
  public created() {
    window.vms[self.$options.name] = self;
  }
}
