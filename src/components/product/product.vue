<template>
  <div class="productContent" v-if="petName.experience">
    <a href="javascript:;"><img :src="petName.experience.image"></a>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default{
    computed: {
      ...mapState(['petName'])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .productContent
    height 155px
    width 100%
    &>a img
      width 100%
      height 100%
</style>
