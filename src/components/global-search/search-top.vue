<template>
    <div class="list__top">
        <span class="dot"></span>
        <p>共找到相关 12 个品牌车系</p>
        <p class="btn">查看全部</p>
    </div>
</template>
<script>
export default {};
</script>
<style lang='less' scoped>
.list__top {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;
  color: #858585;
  .dot {
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background: #febc00;
    margin-right: 10px;
  }
  .btn {
    color: #333333;
    flex: 1;
    text-align: right;
  }
}
</style>
