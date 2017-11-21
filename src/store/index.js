/**
 * Created by 七彩城 on 2017/11/20.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
import state from './state'


Vue.use(Vuex)

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters
})

