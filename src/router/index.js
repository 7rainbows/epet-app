/**
 * Created by 七彩城 on 2017/11/20.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

import firstpage from '../pages/firstpage/firstpage.vue'
import classify from '../pages/classify/classify.vue'
import shopcart from '../pages/shopcart/shopcart.vue'
import usercenter from '../pages/usercenter/usercenter.vue'
import sale from '../pages/sale/sale.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/first_page'
    },
    {
      path: '/first_page',
      component: firstpage
    },
    {
      path: '/shop_cart',
      component: shopcart
    },
    {
      path: '/classify',
      component: classify
    },
    {
      path: '/user_center',
      component: usercenter
    },
    {
      path: '/sale',
      component: sale
    }
  ]
})
