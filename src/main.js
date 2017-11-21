
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import {Button, Swipe, SwipeItem} from 'mint-ui'
import { Navbar, TabItem } from 'mint-ui';

Vue.component(Button.name,Button)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);

import '../static/reset.css'
import './common/stylus/public.styl'


new Vue({
  el: '#app',
  render :h => h(App),
  router,
  store
})

