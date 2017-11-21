<template>
  <div class="copyright">
    <div class="crTop">
      <span class="ct">触屏版</span>
      <span><a href="javascript:;">手机客户端</a></span>
      <span><a href="javascript:;">关于我们</a></span>
      <span><a href="javascript:;">联系我们</a></span>
    </div>
    <div style="text-align:center;margin:0 10px 0 10px; padding-bottom:25px; font-size:12px">
      &copy; wap.epet.com 版权：重庆易宠科技有限公司
    </div>
  </div>
</template>

<script>
  export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .copyright
    height 70px
    .crTop
      height 35px
      display flex
      justify-content space-around
      padding 10px 50px 0 50px
      &>span a
        color #000
      .ct
        color red
</style>
