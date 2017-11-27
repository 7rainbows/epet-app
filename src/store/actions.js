/**
 * Created by 七彩城 on 2017/11/20.
 */

import {reqCat, reqDog, reqWater, reqClassify, RESULT_OK} from '../api'
import {
  RECEIVE_CAT,
  RECEIVE_DOG,
  RECEIVE_WATER,
  RECEIVE_CLASSIFY
} from './mutation-type'

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
  },

  getClassify ({commit}, type_key) {
    reqClassify().then(response => {
      const result = response.data
      console.log(result);
      if (result.code === RESULT_OK) {
        let classify = []
        switch (type_key) {
          case 'dog':
            classify = result.data.dogClass
            //console.log(dogClass);
            commit(RECEIVE_CLASSIFY, {classify})
            break
          case 'cat':
            classify = result.data.catClass
            commit(RECEIVE_CLASSIFY, {classify})
            break
          case 'water':
            classify = result.data.waterClass
            commit(RECEIVE_CLASSIFY, {classify})
            break
        }
      }
    })
  }
}
