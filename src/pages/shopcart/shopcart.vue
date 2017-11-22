<template>
  <div class="wrap">
    <div class="shopCart">
      <div class="cartTop">
        <div class="cartHeader">
          <div class="cartHeaderWrap">
            <a href="javascript:;" class="icon-arrow_lift"></a>
            <span class="cartText">购物车</span>
            <span class="icon-menu"></span>
          </div>
        </div>
        <div class="cartNav"></div>
      </div>
      <div class="cartBox">

      </div>
    </div>
  </div>
</template>

<script>
  export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wrap
    width 100%
    .cartTop
      width 100%
      .cartHeaderWrap
        position relative
        width 100%
        height 50px
        padding 0 12px
        border-bottom solid 1px #eee
        .icon-arrow_lift
          display inline-block
          width 20px
          height 22px
          margin-top 20px
        .cartText
          display inline-block
          width 90%
          height 100%
          /*margin-left 20px*/
          text-align center
          line-height 50px
          font-size 18px
        .icon-menu
          position absolute
          display inline-block
          right 10px
          top 15px
          font-size 20px
          width 20px
          height 20px

</style>
