<template>
  <div>
    <router-link to="/first_page"></router-link>
    <router-view></router-view>
    <footer class="footerNav">
      <ul class="clearfix">
        <li class="index-a dogon">
          <router-link to="/first_page"></router-link>
        </li>
        <li class="type-a">
          <router-link to="/classify"></router-link>
        </li>
        <li class="cart-a">
          <router-link to="/shop_cart"></router-link>
        </li>
        <li class="myepet-a">
          <router-link to="/user_center"></router-link>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>

  export default{
    components: {

    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .footerNav
    border-top 1px solid #e7e7e7
    height 45px
    line-height 45px
    position fixed
    bottom 0
    left 0
    width 100%
    z-index 103
  .footerNav li
    float left
    width 25%
    height 55px
    &>a
      display block
      background-size: 234px 163px;
      margin: 0 auto;
      height: 40px;
      width: 42px;
      margin-top: 2px;
  .index-a
    &>a
      background url("./imgs/img.png") no-repeat
  .type-a
    &>a
      background url("./imgs/img.png") no-repeat
      background-position -85px -41px

  .cart-a
    &>a
      background url("./imgs/img.png") no-repeat
      background-position -85px -82px
  .myepet-a
    &>a
      background url("./imgs/img.png") no-repeat
      background-position -85px -123px



</style>
