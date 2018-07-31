<template>
    <div class="container">
        <p class="test">我是page1</p>
    </div>
</template>
<style lang='less' scoped>
@base: #f938ab;
.container {
  .test {
    display: flex;
    justify-content: space-between;
    width: 110px;
    height: 200px;
    font-size: 30px;
    background-color: @base;
  }
}
</style>

