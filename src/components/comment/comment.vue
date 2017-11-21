<template>
  <div class="commentWrap">
    <div class="commentTop">
      <div class="commentLeft">
        <img src="./comment.jpg">
      </div>
      <div class="commentRight ft12 c999">
        <a href="javascript:;">好评率99%</a>
      </div>
    </div>
    <div class="commentDetail">
      <ul class="commentList">
        <li class="commentItem">
            <a href="javascript:;">
             <div  class="imgClip">
               <div class="commentImg">
                 <img src="./pic_{01} (1).jpg">
                 <div class="joinTime">加入E宠2年2月</div>
               </div>
             </div>
              <div class="mt5 clearfix ft12 pr5 pl5">
                <span class="fl">盒**喵</span> <span class="fr petName">中华田园猫</span>
              </div>
              <div class="mt5 ft13 pr5 pl5 c999 font-intro commentText">
                不知不觉，陪伴E宠三年多了。我家盒小喵也三岁多了。
                在这里购物，我觉得放心，安心，省心。
                质量有保障，售货服务也很贴心，及时。
                这不仅仅是个购物平台，更是爱猫人的天地。
                祝福E宠可以越走越好，有更多丰富的商品
              </div>
            </a>
        </li>
        <li class="commentItem">
            <a href="javascript:;">
             <div  class="imgClip">
               <div class="commentImg">
                 <img src="./pic_{01} (1).jpg">
                 <div class="joinTime">加入E宠2年2月</div>
               </div>
             </div>
              <div class="mt5 clearfix ft12 pr5 pl5">
                <span class="fl">盒**喵</span> <span class="fr petName">中华田园猫</span>
              </div>
              <div class="mt5 ft13 pr5 pl5 c999 font-intro commentText">
                不知不觉，陪伴E宠三年多了。我家盒小喵也三岁多了。
                在这里购物，我觉得放心，安心，省心。
                质量有保障，售货服务也很贴心，及时。
                这不仅仅是个购物平台，更是爱猫人的天地。
                祝福E宠可以越走越好，有更多丰富的商品
              </div>
            </a>
        </li>
        <li class="commentItem">
          <a href="javascript:;">
            <div  class="imgClip">
              <div class="commentImg">
                <img src="./pic_{01} (1).jpg">
                <div class="joinTime">加入E宠2年2月</div>
              </div>
            </div>
            <div class="mt5 clearfix ft12 pr5 pl5">
              <span class="fl">盒**喵</span> <span class="fr petName">中华田园猫</span>
            </div>
            <div class="mt5 ft13 pr5 pl5 c999 font-intro commentText">
              不知不觉，陪伴E宠三年多了。我家盒小喵也三岁多了。
              在这里购物，我觉得放心，安心，省心。
              质量有保障，售货服务也很贴心，及时。
              这不仅仅是个购物平台，更是爱猫人的天地。
              祝福E宠可以越走越好，有更多丰富的商品
            </div>
          </a>
        </li>
        <li class="commentItem">
          <a href="javascript:;">
            <div  class="imgClip">
              <div class="commentImg">
                <img src="./pic_{01} (1).jpg">
                <div class="joinTime">加入E宠2年2月</div>
              </div>
            </div>
            <div class="mt5 clearfix ft12 pr5 pl5">
              <span class="fl">盒**喵</span> <span class="fr petName">中华田园猫</span>
            </div>
            <div class="mt5 ft13 pr5 pl5 c999 font-intro commentText">
              不知不觉，陪伴E宠三年多了。我家盒小喵也三岁多了。
              在这里购物，我觉得放心，安心，省心。
              质量有保障，售货服务也很贴心，及时。
              这不仅仅是个购物平台，更是爱猫人的天地。
              祝福E宠可以越走越好，有更多丰富的商品
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default{}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .commentTop
    position relative
    text-align center
    height 45px
    width 100%
    .commentLeft
      height 100%
      & > img
        display inline-block
        height 100%
    .commentRight
      position absolute
      top 12px
      right 10px

  .commentList

    display flex
    flex-wrap wrap
    justify-content space-around
    padding 10px 0 5px
    .commentItem
      background-color #f5f5f5
      height 254px
      width 172.5px
      margin-bottom 10px
      .imgClip
        height 150px
        overflow hidden
        .commentImg
          position relative
          height 172.5px
          width 172.5px
          &>img
            height 100%
            width 100%
          .joinTime
            position absolute
            text-align center
            background: rgba(0,0,0,.4)
            font-size 12px
            color: #fff
            bottom 22px
            width 100%
      .petName
        background: #ddd;
        border-radius: 5px;
        padding: 0 5px
        color #333
      .fl
        color #333
      .commentText
        /*white-space nowrap*/
        text-align justify
        height 60px
        overflow hidden
        text-overflow ellipsis

</style>
