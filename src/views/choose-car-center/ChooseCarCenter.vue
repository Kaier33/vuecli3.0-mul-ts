<template>
    <div class="container">
        <p>选车中心</p>
        <div class="range">
            <div class="holder"></div>
            <!-- <mt-range id="mt-range" v-model="rangeValue" :barHeight='3'></mt-range> -->
        </div>
        <br>
        <br>
        <div class="portionComment">
            <p class="comment">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis accusantium voluptates recusandae sed libero, animi illo in illum nesciunt rem dolorem corporis cumque? Culpa natus quis libero enim repellat consectetur consequuntur saepe nisi quia, odit impedit eveniet earum quae sequi nemo inventore! Voluptatem, sed magnam. Ab et consequatur cum ratione ad. Quis magni porro recusandae ducimus voluptate aspernatur debitis at tempora est libero nam corporis, ipsa provident nemo obcaecati mollitia consequuntur officiis? A at nesciunt fugit perferendis officiis ut dicta praesentium officia reiciendis debitis? Earum veritatis neque, accusantium sint officiis molestias similique mollitia. Quia exercitationem amet molestiae ratione libero harum!
            </p>
            <p class="mask"></p>
        </div>
        <button @click="handleClick">{{describe}}</button>
        <br>
        <br>

    </div>
</template>
<script>
// import appMixins from "@/assets/js/appMixins.js";
// import "../../assets/css/test.less";
// export default {
//   components: {},
//   name: "screeningResults",
//   mixins: [appMixins],
//   data() {
//     return {
//       loadOver: false,
//       rangeValue: 0,
//       describe: "显示更多"
//     };
//   },
//   methods: {
//     // 上拉加载更多
//     loadMore(data) {},
//     handleClick(e) {
//       let _height =
//         e.target.previousElementSibling.children[0].offsetHeight + "px";
//       if (this.describe == "显示更多") {
//         this.describe = "隐藏更多";
//         $(".portionComment").animate(
//           {
//             height: _height
//           },
//           {
//             duration: 1000,
//             done: function() {
//               $(".mask").hide();
//             }
//           }
//         );
//       } else {
//         this.describe = "显示更多";
//         $(".portionComment").height(200);
//         $(".mask").show();
//       }
//     }
//   },
//   mounted() {
//     console.log(window.$)
//   }
// };
</script>

<style scoped lang='less'>
.container {
  position: relative;
  padding: 0 15px;
  width: 100%;
  transition: all 1s;
  // height: 100vh;
  // box-sizing: border-box;
}
.range {
  position: relative;
  display: flex;
  justify-content: flex-start;
  // flex-wrap: nowrap;
  // align-items: center;
  .holder {
    // position: absolute;
    // top: 0;
    // z-index: 2;
    width: 30px;
    height: 30px;
    border-radius: 100%;
    background-color: pink;
  }
}
#mt-range {
  flex: 1;
}
#mt-range /deep/ .mt-range-progress {
  background-color: rgb(255, 177, 54);
}
.mb20 {
  margin-bottom: 20px;
}
.loadOver p {
  text-align: center;
  color: #c6c6c6;
}
</style>


