<template>
  <div>
    <div class="loginHeader">
      <div class="loginBg">
        <div class="loginHeaderTop">
          <a href="javascript:;" class="icon-arrow_lift"></a>
          <a href="javascript:;" class="loginText">注册</a>
        </div>
        <div class="petLogo"></div>
        <div class="loginTab">
          <ul class="twoTab">
            <li class="tabLi">普通登录
              <div class="triangle" v-show="false"></div>
            </li>
            <li class="tabLi">手机动态密码登录
              <div class="triangle" v-show="true"></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="loginWrap" v-show="false">
      <ul class="loginContent">
        <li class="loginLi">
          <span class="icon-user"></span>
          <input type="text" placeholder="手机号/邮箱/用户名">
        </li>
        <li class="loginLi">
          <span class="icon-lock"></span>
          <input type="text" placeholder="输入密码">
        </li>
      </ul>
      <div class="findPas" style="top:105px">
        <router-link to="/find_password">忘记密码?</router-link>
        <router-view></router-view>
      </div>
      <a href="javascript:;" class="loginPet" style="top: 135px;">登录</a>
    </div>
    <div class="registerWrap" v-show="true">
      <ul class="registerContent">
        <li class="registerLi">
          <span class="icon-mobile"></span>
          <input type="text" placeholder="已注册的手机号">
        </li>
        <li class="registerLi">
          <span class="icon-lock"></span>
          <input type="text" placeholder="请输入图片内容">
          <span style="display:block;position: absolute;top:0px;right:0px;">
            <img src="./seccod.png" style="height:30px; width:85px" name="varify" class="codevar"
                 align="absbottom" onclick="EpetWeixin.login.freshcode(this,85,30)">
          </span>
        </li>
        <li class="registerLi">
          <span class="icon-lock"></span>
          <input type="text" placeholder="动态密码">
          <a href="javascript:void(0);" onclick="EpetWeixin.login.getDynamicCode(this)"
             class="get_phonepass afff ft12 "
             id="scodebtn">获取动态密码</a>
        </li>
      </ul>
      <div class="findPas">
        <router-link to="/find_password">忘记密码?</router-link>
        <router-view></router-view>
      </div>
      <a href="javascript:;" class="loginPet">登录</a>
    </div>
  </div>
</template>

<script>
//  import { MessageBox } from 'mint-ui';
  export default{

  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .loginHeader
    width 100%
    height 178px
    .loginBg
      height 100%
      background url("2ac7b0a4f0ab1e4a63819e0668d1cb39.png") no-repeat
      background-size cover
      .loginHeaderTop
        position relative
        height 50px
        width 100%
        padding 0 12px
        .icon-arrow_lift
          display inline-block
          padding-top 15px
          font-size 18px
          color: #fff
        .loginText
          display inline-block
          position absolute
          right 10px
          top 12px
          color: #fff
          font-size 16px
      .petLogo
        width 100%
        height 48px
        margin-top 15px
        margin-bottom 21px
        background url("logo.png") no-repeat
        background-size 75px 48px
        background-position center
      .loginTab
        background-color: rgba(255, 255, 255, 0.3)
        width 100%
        height 44px
        .twoTab
          width 100%
          height 100%
          display flex
          .tabLi
            position relative
            width 50%
            height 100%
            text-align center
            color #fff
            font-size 15px
            line-height 44px
            .triangle
              position absolute
              bottom 0
              left 45%
              width 0
              height 0
              border-left 10px solid transparent
              border-right 10px solid transparent
              border-bottom 10px solid #fff

  .loginWrap, .registerWrap
    position relative
    width 100%
    height 410px
    .loginContent, .registerContent
      height 104px
      padding 0 20px 12px
      .loginLi, .registerLi
        position relative
        height 50%
        width 100%
        line-height 55px
        border-bottom 1px solid lightgray

  .icon-user, .icon-lock, .icon-mobile
    color lightgray
    font-size 20px
    margin-right 5px

  .icon-lock
    margin-left 3px

  & > input::placeholder
    font-size 14px
    color lightgray
  .get_phonepass
    background #fff
    color #ff4259
    border 1px solid #eb4c33
    position absolute
    right 0
    top 0.5em
    border-radius 3px
    width 85px
    height 70%
    line-height 25px
    text-align center
    padding 0.3em 0
  .ft12
    font-size 12px

  .findPas
    position absolute
    right 25px
    top 145px
  .loginPet
    position absolute
    display block
    height 40px
    width 335px
    margin 5px 20px
    border-radius 5px
    top 165px
    text-align center
    line-height 40px
    color #fff
    font-size 16px
    background #2ec975
    letter-spacing 10px


</style>
