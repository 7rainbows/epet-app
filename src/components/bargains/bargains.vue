<template>
  <div class="surprise-pro pl5 mb10">
    <div ref="bargins" class="swiper-container surprise-scroll swiper-container-horizontal swiper-container2">
      <ul class="swiper-wrapper" >
        <li class="swiper-slide">
          <div class="pro-block">
            <a href="https://wap.epet.com/surprise/Main.html?fw=0">
            <div class="thispro-img loadimg-nofixed">
              <img class="image" src="./imgs/pic_{sale001} (4).jpg" lazy="loaded"> <!----> <!---->
            </div>
            <div class="cred ftc mt5">
              <span class="ft12">¥</span>
              <span class="ft17">1.50</span>
            </div>
              <p class="c999 ftc ft12">省￥13.50</p>
            </a>
          </div>
        </li>
        <li class="swiper-slide">
          <div class="pro-block">
            <a href="https://wap.epet.com/surprise/Main.html?fw=0">
            <div class="thispro-img loadimg-nofixed">
              <img class="image" src="./imgs/pic_{sale001} (3).jpg" lazy="loaded"> <!----> <!---->
            </div>
            <div class="cred ftc mt5">
              <span class="ft12">¥</span>
              <span class="ft17">1.50</span>
            </div>
              <p class="c999 ftc ft12">省￥13.50</p>
            </a>
          </div>
        </li>
        <li class="swiper-slide">
          <div class="pro-block">
            <a href="https://wap.epet.com/surprise/Main.html?fw=0">
            <div class="thispro-img loadimg-nofixed">
              <img class="image" src="./imgs/pic_{sale001} (2).jpg" lazy="loaded"> <!----> <!---->
            </div>
            <div class="cred ftc mt5">
              <span class="ft12">¥</span>
              <span class="ft17">1.50</span>
            </div>
              <p class="c999 ftc ft12">省￥13.50</p>
            </a>
          </div>
        </li>
        <li class="swiper-slide">
          <div class="pro-block">
            <a href="https://wap.epet.com/surprise/Main.html?fw=0">
            <div class="thispro-img loadimg-nofixed">
              <img class="image" src="./imgs/pic_{sale001} (5).jpg" lazy="loaded"> <!----> <!---->
            </div>
            <div class="cred ftc mt5">
              <span class="ft12">¥</span>
              <span class="ft17">1.50</span>
            </div>
              <p class="c999 ftc ft12">省￥13.50</p>
            </a>
          </div>
        </li>
        <li class="swiper-slide">
          <div class="pro-block">
            <a href="https://wap.epet.com/surprise/Main.html?fw=0">
            <div class="thispro-img loadimg-nofixed">
              <img class="image" src="./imgs/pic_{sale001} (7).jpg" lazy="loaded"> <!----> <!---->
            </div>
            <div class="cred ftc mt5">
              <span class="ft12">¥</span>
              <span class="ft17">1.50</span>
            </div>
              <p class="c999 ftc ft12">省￥13.50</p>
            </a>
          </div>
        </li>
        <li class="swiper-slide">
          <div class="pro-block">
            <a href="https://wap.epet.com/surprise/Main.html?fw=0">
            <div class="thispro-img loadimg-nofixed">
              <img class="image" src="./imgs/pic_{sale001} (4).jpg" lazy="loaded"> <!----> <!---->
            </div>
            <div class="cred ftc mt5">
              <span class="ft12">¥</span>
              <span class="ft17">1.50</span>
            </div>
              <p class="c999 ftc ft12">省￥13.50</p>
            </a>
          </div>
        </li>
        <li class="swiper-slide">
          <div class="pro-block">
            <a href="https://wap.epet.com/surprise/Main.html?fw=0">
            <div class="thispro-img loadimg-nofixed">
              <img class="image" src="./imgs/pic_{sale001} (4).jpg" lazy="loaded"> <!----> <!---->
            </div>
            <div class="cred ftc mt5">
              <span class="ft12">¥</span>
              <span class="ft17">1.50</span>
            </div>
              <p class="c999 ftc ft12">省￥13.50</p>
            </a>
          </div>
        </li>
        <li class="swiper-slide">
          <div class="pro-block">
            <a href="https://wap.epet.com/surprise/Main.html?fw=0">
            <div class="thispro-img loadimg-nofixed">
              <img class="image" src="./imgs/pic_{sale001} (4).jpg" lazy="loaded"> <!----> <!---->
            </div>
            <div class="cred ftc mt5">
              <span class="ft12">¥</span>
              <span class="ft17">1.50</span>
            </div>
              <p class="c999 ftc ft12">省￥13.50</p>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default{
    mounted() {
      this.$nextTick(() =>{
        const barginsScroll = new BScroll(this.$refs.bargins, {
          click: true,
          scrollX: true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .swiper-container2
    width 100%
    overflow hidden
  .swiper-wrapper
    width 880px
    height 100%
  .swiper-wrapper li
    float left
    width 98.5714px
    height 130px
    margin-right 10px
  .pro-block {
    margin: 0 .5em;
  }
  .pro-block a {
    display: block;
  }
  .pro-block img {
    display block
    width: 100%;
  }

</style>
