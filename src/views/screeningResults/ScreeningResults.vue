<template>
    <div class="container">
        <!-- list -->
        <ResultList v-for="(item,index) in screeningList" :key="index" class="mb20" />
        <!-- notice -->
        <p v-if="screeningList.length==0 || loadOver " class="loadOver">已加载完所有内容</p>
    </div>
</template>
<script>
// import appMixins from "@/assets/js/appMixins.js";
// import ResultList from "@/components/screening/ScreeningResultsList";
// export default {
//   components: { ResultList },
//   name: "screeningResults",
//   mixins: [appMixins],
//   data() {
//     return {
//       screeningList: [0, 1, 2],
//       loadOver: false
//     };
//   },
//   methods: {
//     // 上拉加载更多
//     loadMore(data) {
//       if (data.length == 0) {
//         this.loadOver = true;
//       } else {
//         this.screeningList.concat(data);
//       }
//     }
//   },
//   mounted() {}
// };
</script>

<style scoped lang='less'>
.container {
  position: relative;
  padding: 0 15px;
  width: 100%;
  box-sizing: border-box;
}
.mb20 {
  margin-bottom: 20px;
}
.loadOver {
  text-align: center;
  color: #c6c6c6;
}
</style>

