<template>
  <div class="wrap">
    <div class="shopCart1">
      <div class="cartTop1">
        <div class="cartHeader1">
          <div class="cartHeaderWrap1">
            <!--<router-link to="{url}"  class="icon-arrow_lift"></router-link>-->
            <span  class="icon-arrow_lift" @click="goBack"></span>
            <router-view></router-view>
            <span class="cartText" v-if="city.province">{{city.province.value + ' | ' + city.city.value + ' | ' + city.area.value}}</span>
            <span class="cartText" v-else="">选择收货地址</span>
            <span class="icon-menu"></span>
          </div>
        </div>
        <div class="cartNav"></div>
      </div>
      <div class="cartBox">

      </div>
    </div>
    <div class="searchList">
      <span class="searchLi" :class="{searchActive:btn===1}" @click="skipPet('cat',1)">猫猫站</span>
      <span class="searchLi" :class="{searchActive:btn===2}" @click="skipPet('dog',2)">狗狗站</span>
      <span class="searchLi" :class="{searchActive:btn===3}" @click="skipPet('water',3)">水族站</span>
    </div>
    <div class="placeWrap" ref="placeWrap" @click="refresh">
      <v-distpicker type="mobile"
                    @province="selectProvince"
                    @selected="onSelected"></v-distpicker>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import VDistpicker from 'v-distpicker'
  import BScroll from 'better-scroll'
  export default{
    data(){
      return{
        btn: 1,
        url:'/first_page?pet_type=cat&btn=1'
      }
    },
    mounted() {
      this.refresh ()
      //进入三级联动页面读取btn_key来同步按钮
      this.btn = JSON.parse(localStorage.getItem('btn_key')||'1')
    },
    methods:{
      refresh () {
        this.$nextTick(() => {
          if(!this.placeScroll){
            this.placeScroll = new BScroll(this.$refs.placeWrap, {
              click: true
            })
          } else {
            this.placeScroll.refresh()
          }
        })
      },
      goBack () {
        this.$router.back(-1)//三级联动回退按钮
      },
      selectProvince(value) {
        this.$store.state.city.province = value
      },
      onSelected (data) {
        this.$store.state.city = data
        //保存选择城市的状态
        localStorage.setItem('city_key',JSON.stringify(data))
        if(this.btn === 1){
          this.url='/first_page?pet_type=cat&btn=1'
        }
        if(this.btn === 2) {
          this.url='/first_page?pet_type=dog&btn=2'
        }
        if(this.btn === 3) {
          this.url='/first_page?pet_type=water&btn=3'
        }
        setTimeout(() => {
          this.$router.push(this.url)
        },1500)
      },
      skipPet (pet,btn) {//优化
        this.btn = btn
        setTimeout(() => {
          this.$router.push({ path: '/first_page', query: { pet_type: `${pet}`, btn: `${btn}` }})
          localStorage.setItem('btn_key',`${btn}`)
          localStorage.setItem('type_key',`${pet}`)
        },1000)
      },
      /*skipCat () {
        setTimeout(() => {
          this.$router.push({ path: '/first_page', query: { pet_type: 'cat', btn: '1' }})
          localStorage.setItem('btn_key','1')
          localStorage.setItem('type_key','cat')
        },1000)
      },
      skipDog () {
        this.btn = 2
        setTimeout(() => {
          this.$router.push({ path: '/first_page', query: { pet_type: 'dog', btn: 2 }})
          localStorage.setItem('btn_key','2')
          localStorage.setItem('type_key','dog')
        },1000)
      },
      skipWater () {
        this.btn = 3
        setTimeout(() => {
          this.$router.push({ path: '/first_page', query: { pet_type: 'water', btn: 3 }})
          localStorage.setItem('btn_key','3')
          localStorage.setItem('type_key','water')
        },1000)
      }*/
    },
    computed: {
      ...mapState(['city'/*, 'cat', 'dog', 'water'*/])
    },
    components: { VDistpicker }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .wrap
    position relative
    height 100%
    width 100%
  .placeWrap
    position absolute
    top 105px
    bottom 0
    width 100%
    overflow hidden
  .cartTop1
    width 100%
    .cartHeaderWrap1
      position relative
      width 100%
      height 50px
      padding 0 12px
      border-bottom solid 1px #eee
      .icon-arrow_lift
        position absolute
        display inline-block
        width 20px
        height 22px
        top 20px
      .cartText
        display inline-block
        width 90%
        height 100%
        margin-left 20px
        text-align center
        line-height 50px
        font-size 18px
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
      .icon-menu
        position absolute
        display inline-block
        right 10px
        top 15px
        font-size 20px
        width 20px
        height 20px
  .searchList
    display flex
    justify-content space-between
    width 100%
    height 54px
    padding 10px 15px
    background #efefef
    .searchLi
      display inline-block
      width 100px
      text-align center
      padding 0 15px
      line-height 35px
      border-radius 10px
      background #b9b9b9
      color: #666
    .searchActive
      background red
      color: #fff
  .showCity
    width 100%
    height 54px
</style>
