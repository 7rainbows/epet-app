<template>
  <div class="classify">
    <div class="headerWrap">
      <div class="headerLeft">
        <a href="#"><span :class="{active:isShow}" @click="handleShow(true)">分类</span></a>
      </div>
      <div class="headerRight">
        <a href="#"> <span :class="{active:!isShow}" @click="handleShow(false)">品牌</span></a>
        <a href="#"><span class="icon-search"></span></a>
      </div>
    </div>

    <div class="classContent">
      <div class="classList" v-if="isShow" >
        <div style="width: 70px; height:100%" ref="itemWrap">
          <ul class="listWrap">
            <li class="listLi"  v-for="(classa, index) in classify" @click="searchLi(index)"
                :class="{activeLi:contentLi==classa.type}">{{classa.name}}</li>
          </ul>
        </div>
        <div class="brandWrap" ref="brand" v-if="classify">
          <div class="contentLiWrap">
            <div class="contentLi"
                 v-for="(classa ,index) in classify" v-if="contentLi==classa.type">
              <div class="topWrap">
                <div class="foodTop">
                  <div class="foodHeader">
                    <a href="" class="title c999 db ft12 mt10 pl5">{{classa.name}}
                      <img src="./more.jpg" class="fr more">
                    </a>
                    <ul class="detail">
                      <li class="detailLi" v-for="(good, index) in classa.goods" :key="index">
                        <a href="">
                          <div class="rela loadimg-nofixed">
                            <img class="w100 image" :src="good.photo">
                          </div>
                          <p class="ftc ft12 mt10 c333">{{good.name}}</p>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="foodBrand"><!--品牌-->
                <div class="title c999 db ft12 mt10 pl5">热门品牌</div>
                <ul class="brandList" >
                  <li class="brandLi" v-for="(hotBrand, index) in classa.hotBrands" :key="index">
                    <a href="">
                      <div class="img rela overflow imgItem">
                        <img class="lheight image" :src="hotBrand.logo">
                      </div>
                      <p class="ftc ft12 mt10">{{hotBrand.name}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!isShow">我是品牌</div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  export default{
    data(){

      return{
        type_key: 'cat',
        isShow:true,
        contentLi:0,
        /*classes: [
          {name:'主粮',type:0,good:'maoliang'},
          {name:'主粮',type:1,good:'goulaing'},
          {name:'主粮',type:2,good:'12345'},
          {name:'主粮',type:3,good:'4567'},
          {name:'主粮',type:4,good:'23456777'},
          {name:'主粮',type:5,good:'23456777'},
          {name:'主粮',type:6,good:'23456777'},
          {name:'主粮',type:7,good:'23456777'},
          {name:'主粮',type:8,good:'23456777'},
          {name:'主粮',type:9,good:'23456777'},
          {name:'主粮',type:10,good:'23456777'},
          {name:'主粮',type:10,good:'23456777'}

        ]*/
      }
    },
    mounted () {
      this.type_key = localStorage.getItem('type_key')||'cat'

      this.$store.dispatch('getClassify', this.type_key)
      this._initScroll()


        console.log(this.classify);

    },
    methods: {
      _initScroll() {
        //console.log(4444444);
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.itemWrap, {
            click:true
          })
        })
        this.$nextTick(() =>{
          const brandScroll = new BScroll(this.$refs.brand, {
            click:true
          })
        })
      },
      handleShow (isShow) {
        this.isShow = isShow
      },
      searchLi (contentLi) {
        this.contentLi = contentLi
      },
    },
    watch: {
      classify (newVal, oldVal) {
        this._initScroll()

      },
      contentLi (newVal, oldVal) { //监视左侧列表li的点击变换，当变换时，右侧对应内容也要变化，此时应重新的创建scroll对象
        this._initScroll()
        //console.log(555555);
      }
    },
    computed: mapState(['petName', 'classify'])
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .headerWrap
    height 40px
    padding 0 15px
    line-height 40px
    overflow hidden
    border-bottom solid 2px #eee
    .headerLeft, .headerRight
      height 100%
      float left
      width 50%
      &>a
        display inline
      span
        display inline-block
        text-align center
        height 100%
        width 34px
        color #333
        font-size 13px
        font-weight 700
      .active
        color red
        border-bottom solid 2px red

    .headerLeft
      text-align right
      padding-right  20px
    .headerRight
      position relative
      padding-left 20px
      .icon-search
        position absolute
        top: 15px
        right 0

  /*内容列表*/
  .classContent
    position absolute
    width 100%
    top 40px
    bottom 50px
    overflow hidden
    .classList
      height 100%
      position relative
      width 100%
      .listWrap
        width 70px
        .activeLi
          background #eee
      .listLi
        width 70px
        height 50px
        border-bottom solid 1px #eee
        text-align center
        line-height 50px
      .brandWrap
        position absolute
        height 100%
        top 0
        bottom 0
        right 0
        left 70px
      .contentLiWrap
        position absolute
        left 0px
        top 0
        right 0
        display inline-block
        height auto
        //min-height 578px
        width 100%
        .contentLi
          //position absolute
          display inline-block
          /*left 0px
          top 0
          right 0*/
          border-top 2px #eee solid
          border-left 4px #eee solid


  /*内容区*/
  .topWrap
    padding 10px 5px
    border-bottom 1px solid #efefef
    .detail
      display flex
      justify-content space-between
      width 100%
      flex-wrap wrap
      .detailLi
        padding 10px 5px
        height 116px
        width 32%
        img
          border solid 1px #efefef
    .more
      height: 10px;
      top 20px
  .foodBrand
    padding 10px 5px
    width 100%
    .brandList
      width 100%
      display flex
      justify-content space-around
      flex-wrap wrap
      .brandLi
        width 135px
        height 97px
        margin-top 10px
        .imgItem
          border solid 1px #efefef
        .lheight
            height 45px
            max-width 100%
            left 0
            right 0
            margin 0 auto
            margin-top 10px
            margin-left 23px
            margin-bottom 12px




</style>
