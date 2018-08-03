<template>
    <div class="container">
        <!-- list -->
        <ResultList v-for="(item,index) in screeningList" :key="index" class="mb20" />
        <!-- notice -->
        <p v-if="screeningList.length==0 || loadOver " class="loadOver">已加载完所有内容</p>
    </div>
</template>
<script lang='ts'>
import appMixins from '@/assets/ts/mixins';
import ResultList from '@/components/screening/screening-results-list.vue';

import { Vue, Component, Mixins } from "vue-property-decorator";
@Component({
    name: "screeningResults",
    components: { ResultList },
})
export default class ScreeningResults extends Mixins(appMixins) {

    private loadOver: boolean = false;
    private screeningList: object[] = [{ a: 1 }, { b: 2 }, { c: 2 }];

    get count(): number {
        return 233;
    }

    private mounted() {
        // console.log(window);
    }

    private loadMore<T>(data: T[]): void {
        if (data.length === 0) {
            this.loadOver = true;
        } else {
            this.screeningList.concat(data);
        }
    }
}
</script>

<style scoped lang='less'>
.container {
  box-sizing: border-box;
  position: relative;
  padding: 0 15px;
  width: 100%;
}
.mb20 {
  margin-bottom: 20px;
}
.loadOver {
  text-align: center;
  color: #c6c6c6;
}
</style>

