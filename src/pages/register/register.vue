<template>
  <div class="registerWrap">
    <div class="firstRegister" v-show="true">
      <div class="firstHeader">
        <div class="firstHeaderWrap">
          <span class="icon-mobile"></span>
          <input type="text" placeholder="请输入手机号码" v-model="firPhoVal">
        </div>
      </div>
      <div class="firstBtnWrap">
        <div class="firstBtn" :class="{redBtn: firPhoVal}"><span>下一步</span></div>
      </div>
    </div>
    <div class="secondRegister" v-show="false">
      <ul class="secondList">
        <li class="secondLi">
          <span class="icon-mobile"></span>
          <input type="text" placeholder="请输入手机号码">
        </li>
        <li class="secondLi">
          <span class="icon-image"></span>
          <input type="text" placeholder="图片验证码">
        </li>
        <li class="secondLi">
          <span class="icon-mail4"></span>
          <input type="text" placeholder="验证码">
          <a href="javascript:void(0);" onclick="EpetWeixin.register.getDynamicCode2(this)" class="get_phonepass afff ft14 w9" id="scodebtn">获取短信验证码</a>
        </li>
        <li class="secondLi">
          <span class="icon-user"></span>
          <input type="text" placeholder="你的昵称/用户名">
        </li>
        <li class="secondLi">
        <span class="icon-lock"></span>
        <input type="text" placeholder="请设置密码">
      </li>
        <li class="secondLi">
        <span class="icon-lock"></span>
        <input type="text" placeholder="请确认密码">
      </li>
      </ul>
      <div class="secondBtnWrap">
        <div class="secondBtn" :class="{redBtn: firPhoVal}"><span>下一步</span></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data() {
      return {
        firPhoVal:null
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .registerWrap
    position relative
    width 100%
    height  100%
    .firstRegister
      height 50px
      margin-left 15px
      .firstHeaderWrap
        height 100%
        width 100%
        padding 15px 0
        line-height 20px
        border-bottom 1px solid #e0e0e0
      .firstBtnWrap
        height 50px
        width 100%
        padding-top 20px
        padding-right 15px
        .firstBtn
          height 30px
          margin 0 10px
          border-radius 15px
          background lightgray
          text-align center
          line-height 30px
          color: #fff
  /*second*/
    .secondList
      margin-left 15px
      .secondLi
        position relative
        width 100%
        height 50px
        padding 15px 0
        line-height 20px
        border-bottom 1px solid #e0e0e0
        .get_phonepass
          background: #fed171
          position: absolute
          right: 0
          top: 0.7em
          border-radius: 30px
          width: 7em
          text-align: center
          padding: 0.3em 0
          color #fff
    .secondBtnWrap
      height 50px
      width 100%
      padding-top 20px
      .secondBtn
        height 30px
        margin 0 10px
        border-radius 15px
        background lightgray
        text-align center
        line-height 30px
        color: #fff
  .redBtn
    background red !important


</style>
