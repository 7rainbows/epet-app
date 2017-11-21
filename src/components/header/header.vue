<template>

  <div class="headerbox float-div">
    <div class="main">
      <div class="clearfix pt5 pl10 pr10 pb5">
        <div class="epet-search bgf">
          <div class="fl rela ft14 location">
            <a href="">
              <span class="catordog c89">狗狗站</span>
              <span class="c89">|</span>
              <span data-name="my-place" class="myposition c89 ft13">北京</span>
              <i></i>
            </a>
          </div>
          <p class="search-text">
            <a href="">
              <input type="search" placeholder="搜索商品和品牌" disabled="disabled">
              <span class="eico serach-ico"></span>
            </a>
          </p>
          <a href="" class="epet-category">
            <img src="//static.epetbar.com/static_web/wap/src/images/mydope.png" alt="">
          </a>
        </div>
      </div>
      <div class="find_nav">
        <div class="find_nav_left dscroll">
          <div class="find_nav_list dscroll-div" ref="navList">
            <ul class="dscroll-ul">
              <li class="dscroll-li on">
                <a href="https://wap.epet.com/main.html?menu_param=0&amppet_type=dog&ampfw=0"><!---->
                  <span class="rela">
                    <span>首页</span>
                    <i></i>
                  </span>
                </a>
              </li>
              <li class="dscroll-li">
                <a href="https://wap.epet.com/clothmall/main.html?pet_type=dog&ampfw=0"><!---->
                  <span class="rela">
                    <span>服饰城</span>
                    <i></i>
                  </span>
                </a>
              </li>
              <li class="dscroll-li">
                <a href="https://wap.epet.com/main.html?menu_param=123&amppet_type=dog&ampis_single=1&ampfw=0"><!---->
                  <span class="rela">
                    <span>狗狗主粮</span>
                    <i></i>
                  </span>
                </a>
              </li>
              <li class="dscroll-li">
                <a href="https://wap.epet.com/main.html?menu_param=125&amppet_type=dog&ampis_single=1&ampfw=0"><!---->
                  <span class="rela">
                    <span>医疗保健</span>
                    <i></i>
                  </span>
                </a>
              </li>
              <li class="dscroll-li">
                <a href="https://wap.epet.com/main.html?menu_param=131&amppet_type=dog&ampis_single=1&ampfw=0"><!---->
                  <span class="rela">
                    <span>零食玩具</span>
                    <i></i>
                  </span>
                </a>
              </li>
              <li class="dscroll-li">
                <a href="https://wap.epet.com/main.html?menu_param=134&amppet_type=dog&ampis_single=1&ampfw=0"><!---->
                  <span class="rela">
                    <span>日用外出</span>
                    <i></i>
                  </span>
                </a>
              </li>
              <li class="dscroll-li">
                <a href="https://wap.epet.com/main.html?menu_param=140&amppet_type=dog&ampis_single=1&ampfw=0"><!---->
                  <span class="rela">
                    <span>美容香波</span>
                    <i></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    mounted() {
      this.$nextTick(() =>{
        const navScroll = new BScroll(this.$refs.navList, {
          click:true,
          scrollX:true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .find_nav
    width: 100%
    height: 35px
    min-width: 320px

  .dscroll
    /*overflow-x: hidden
    overflow-y: hidden*/
    overflow hidden

  .dscroll .dscroll-ul
    white-space: nowrap
    display: flex
    width 140%

  ul, li
    list-style: none

  .dscroll .dscroll-li
    width: 25%
    padding 0 10px

  .find_nav_list ul li a
    display: block
    width: 100%
    height: 100%
    line-height: 36px
    font-size: 14px
    text-align: center
    color: #666

  .find_nav_list li i
    position: absolute
    bottom: 1px
    left: -10%
    width: 120%
    height: 2px
  .find_nav_list ul li.on i {
      background: #459d36;
  }
  .find_nav_list ul li.on span {
    color: #459d36;
    display: inline-block;
  }

</style>
