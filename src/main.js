
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button, Swipe, SwipeItem} from 'mint-ui'
import VDistpicker from 'v-distpicker'

import './mock/mockServer'

Vue.component(Button.name,Button)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.component('v-distpicker', VDistpicker)


import '../static/reset.css'
import './common/stylus/public.styl'
import '../src/font/stylus/font.styl'


new Vue({
  el: '#app',
  render :h => h(App),
  router,
  store
})

