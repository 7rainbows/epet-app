<template>
  <div>
    <pet-header></pet-header>
    <div class="banner_item">
      <div class="swiper-container banner-scroll banner-scroll0 swiper-container-horizontal">
        <mt-swipe :auto="4000">
          <mt-swipe-item>
            <a href=""><img src="./imgs/pic_001.jpg" alt=""></a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href=""><img src="./imgs/pic_002.jpg" alt=""></a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href=""><img src="./imgs/pic_003.jpg" alt=""></a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href=""><img src="./imgs/pic_004.jpg" alt=""></a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href=""><img src="./imgs/pic_005.jpg" alt=""></a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href=""><img src="./imgs/pic_006.jpg" alt=""></a>
          </mt-swipe-item>
          <mt-swipe-item>
            <a href=""><img src="./imgs/pic_007.jpg" alt=""></a>
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </div>
    <div class="xline"><div class="page-line"></div></div>
    <div>
      <ul class="clearfix hottype pt10 pb10">
        <li class="fl">
          <a href=""><img src="./imgs/pic_001.png"></a>
        </li>
        <li class="fl">
          <router-link to="/sale"><img src="./imgs/pic_002.png"></router-link>
        </li>
        <li class="fl">
          <a href=""><img src="./imgs/pic_003.png"></a>
        </li>
        <li class="fl">
          <a href=""><img src="./imgs/pic_004.png"></a>
        </li>
        <li class="fl">
          <a href=""><img src="./imgs/pic_005.png"></a>
        </li>
        <li class="fl">
          <a href=""><img src="./imgs/pic_006.png"></a>
        </li>
        <li class="fl">
          <a href=""><img src="./imgs/pic_007.png"></a>
        </li>
        <li class="fl">
          <a href=""><img src="./imgs/pic_008.png"></a>
        </li>
        <router-view></router-view>
      </ul>
    </div>
    <div class="xline"><div class="page-line"></div></div>

  </div>
</template>

<script>
  import header from '../../components/header/header.vue'
  import sale from '../../pages/sale/sale.vue'
  export default{
    components: {
      'pet-header':header,
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .banner_item
    height: 160px
    a
      display block
      &>img
        width 100%
        height 160px
    .mint-swipe
      height 160px
  .page-line
    background #f3f4f5
    height: 10px


  /*中间八个导航按键样式*/
  .hottype
    padding 0
    height 175px
  .hottype li
    height 50%
    width: 25%
    &>a
      height 100%
  .hottype li img
    width: 100%
    height 100%
    display block
    border: 0;

  /*每日疯抢样式*/




</style>
