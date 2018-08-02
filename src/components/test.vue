<template>
    <div class="container">
       test test
    </div>
</template>
<script lang='ts'>
// library
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Test extends Vue {
    // lifecycle
    private mounted() {
        // console.log(window);
        // console.log(this.$route);
    }
}
</script>

