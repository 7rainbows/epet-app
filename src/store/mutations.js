/**
 * Created by 七彩城 on 2017/11/20.
 */
import {RECEIVE_CAT, RECEIVE_DOG, RECEIVE_WATER} from './mutation-type'

export default {
  [RECEIVE_CAT] (state, {cat}) {
    state.cat = cat
  },

  [RECEIVE_DOG] (state, {dog}) {
    state.dog = dog
  },

  [RECEIVE_WATER] (state, {water}) {
    state.water = water
  }
}
