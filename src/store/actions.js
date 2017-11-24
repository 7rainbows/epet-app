/**
 * Created by 七彩城 on 2017/11/20.
 */

import {reqCat, reqDog, reqWater, RESULT_OK} from '../api'
import {RECEIVE_CAT, RECEIVE_DOG, RECEIVE_WATER} from './mutation-type'

export default {
  getCat ({commit}) {
    reqCat().then(response => {
      const result = response.data
      if (RESULT_OK===result.code) {
        const cat = result.data
        commit(RECEIVE_CAT, {cat})
      }
    })
  },

  getDog ({commit}) {
    reqDog().then(response => {
      const result = response.data
      if (result.code === RESULT_OK) {
        const dog = result.data
        commit(RECEIVE_DOG, {dog})
      }
    })
  },

  getWater ({commit}) {
    reqWater().then(response => {
      const result = response.data
      if (result.code === RESULT_OK) {
        const water = result.data
        commit(RECEIVE_WATER, {water})
      }
    })
  }
}
