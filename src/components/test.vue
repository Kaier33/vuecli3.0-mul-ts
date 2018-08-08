<template>
    <div class="container">
        test test
    </div>
</template>
<script lang='ts'>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Test extends Vue {
  mounted() {
    // console.log(window);
    // this.sayComMua();
  }

  sayComMua() {
    console.log("Mua");
  }
}
</script>

