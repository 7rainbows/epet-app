<template>
  <div>
    <pet-header></pet-header>

    <div ref="firstpage" class="firstpage">
      <div>
        <!--轮播-->
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
        <pagline></pagline>
        <!--轮播下八个导航-->
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
        <pagline></pagline>
        <!--每日疯抢-->
        <div class="surprise">
          <!--头部-->
          <div class="surprise-tit clearfix pad10 rela overflow">
            <div class="fl titimg"><img src="./imgs/pic_{sale001} (8).jpg"></div>
            <div class="fl ft13 ml10" style="margin-top: 1px;">距本场结束</div>
            <div class="fl surprise-time hide" v-if="false">1511229600</div>
            <div class="time ftc fl ml5">
              <div class="time1 dib clearfix ft12 dtime">
                <span class="time1-1">00</span>
                <span class="time-zi ft12">:</span>
                <span class="time1-1">31</span>
                <span class="time-zi ft12">:</span>
                <span class="time1-1">50</span>
              </div>
            </div>
            <div class="more">
              <a href="https://wap.epet.com/surprise/Main.html?fw=0" class="db ftr">
                <img src="./imgs/pic_032.png">
              </a>
            </div>
          </div>
          <!--每日疯抢导航-->
          <bargins></bargins>
        </div>
        <pagline></pagline>
        <!--热门栏目-->
        <div class="hotColum">
          <div class="hotTop">
            <a href=""><img src="./imgs/pic_{01} (hot).jpg"></a>
          </div>
          <div class="hotContent">
            <div class="contentLeft">
              <a href=""><img src="./imgs/pic_{01} (hot2) .jpg"></a>
            </div>
            <div class="contentRight">
              <a href=""><img src="./imgs/pic_{01} (hot)  (2).jpg"></a>
              <a href=""><img src="./imgs/pic_{01} (hot3).jpg"></a>
            </div>
          </div>
        </div>
        <pagline></pagline>
        <!--潮品视频-->
        <div class="video">
          <div class="productTop">
            <img src="./imgs/pic_{01} (8).jpg">
            <a href=""><img src="./imgs/pic_032.png"></a>
          </div>
          <div class="videoContent">
            <a href="#">
              <div class="imgWrap"><img src="./imgs/pic_{01}.jpg"></div>
              <div class="ft12 c999 pad10 ftc">
                <div class="textover c333">夜空中最亮的星</div>
                <div class="viewWrap">
                  <span class="view"></span>
                  <i>7397</i><span class="ml10 mr10">|</span> &nbsp;02:20
                </div>
              </div>
            </a>
          </div>
        </div>
        <pagline></pagline>
        <!--体验馆-->
        <div class="product">
          <div class="productTop">
            <img src="./imgs/pic_{01} (7).jpg">
            <a href=""><img src="./imgs/pic_032.png"></a>
          </div>
          <product></product>
        </div>
        <pagline></pagline>
        <!--品牌特卖-->
        <div class="cheap">
          <div class="productTop">
            <img src="./imgs/pic_{01} (9).jpg">
          </div>
        </div>
        <!---->
        <div class="cheapList">
          <div class="cheapTitle pad10">
            <span class="ft15">谷登新品</span>
            <span class="c999 ml5 ft12">5折限量</span>
          </div>
          <product></product>
        </div>
        <div class="cheapList">
          <div class="cheapTitle pad10">
            <span class="ft15">谷登新品</span>
            <span class="c999 ml5 ft12">5折限量</span>
          </div>
          <product></product>
        </div>
        <div class="cheapList">
          <div class="cheapTitle pad10">
            <span class="ft15">谷登新品</span>
            <span class="c999 ml5 ft12">5折限量</span>
          </div>
          <product></product>
        </div>
        <div class="cheapList">
          <div class="cheapTitle pad10">
            <span class="ft15">谷登新品</span>
            <span class="c999 ml5 ft12">5折限量</span>
          </div>
          <product></product>
        </div>
        <!--口碑评价-->
        <comment></comment>
        <pagline></pagline>
        <copyright></copyright>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import pagline from '../../components/pageline/pageline.vue'
  import header from '../../components/header/header.vue'
  import sale from '../../pages/sale/sale.vue'
  import bargins from '../../components/bargains/bargains.vue'
  import product from '../../components/product/product.vue'
  import comment from '../../components/comment/comment.vue'
  import copyright from '../../components/copyright/copyright.vue'
  export default{
    mounted() {
      this.$nextTick(() => {
        const firpageScroll = new BScroll(this.$refs.firstpage, {
          click: true
        })
      })
    },
    components: {
      'pet-header': header,
      bargins,
      pagline,
      product,
      comment,
      copyright
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .firstpage
    width 100%
    position absolute
    top 87px
    bottom 45px
    overflow hidden

  .banner_item
    height: 160px
    a
      display block
      & > img
        width 100%
        height 160px
    .mint-swipe
      height 160px

  /*中间八个导航按键样式*/
  .hottype
    padding 0
    height 175px

  .hottype li
    height 50%
    width: 25%
    & > a
      height 100%

  .hottype li img
    width: 100%
    height 100%
    display block
    border: 0;

  /*每日疯抢头部样式*/
  .surprise
    width 100%
    overflow hidden

  .surprise-tit
    left 10px
    margin-top 10px

  .surprise-tit .titimg img
    display block
    height 24px
    margin-left -20px

  .time1-1
    border 1px solid #ddd
    padding 1px 2px
    font-size 13px

  .time-zi
    margin 0 3px
    font-weight 700

  .clearfix:after
    content "."
    display block
    height 0
    clear both
    visibility hidden

  .more
    position absolute
    top -13px
    right 10px

  .more img
    display block
    margin: 0 0 0 auto
    width 50%

  /*热门栏目*/
  .hotColum
    height 230px
    position relative

  .hotTop
    border-bottom solid #eee 1px

  .hotTop img
    height 40px

  .contentLeft
    width 42.5%

  .contentLeft img
    width 100%

  .contentRight
    position absolute
    top 41px
    right 0
    bottom 0
    width 57.5%
    border-bottom solid #eee 1px

  .contentRight img
    width 100%

  /*潮品视频*/
    /* 公共头部   */
  .product
    height 217px
  .video
    height 330px
  .video, .product, .cheap
    width 100%
    padding-top 10px
    .productTop
      position relative
      text-align center
      height 52px
      width 100%
      border-bottom solid #eee 1px
      & > img
        height 100%
    .productTop a img
      position absolute
      height 52px
      top 0
      right 5px
      /*    */
      /*潮品视频*/
    .videoContent
      height 268px
      .imgWrap
        height 210px
        &>img
          height 100%
      .c333
        color #333
      .viewWrap
        .view
          display inline-block
          height 9px
          width 10px
          background url("./imgs/view-black.png") no-repeat
          background-size contain

  /* 品牌特卖*/
  .cheapTitle
    height 44px
    width 100%
    border-bottom solid #eee 1px

</style>
