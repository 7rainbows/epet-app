/**
 * Created by 七彩城 on 2017/11/20.
 */
import {
  RECEIVE_CAT,
  RECEIVE_DOG,
  RECEIVE_WATER,
  RECEIVE_CLASSIFY
} from './mutation-type'

export default {
  [RECEIVE_CAT] (state, {cat}) {
    state.petName = cat
  },

  [RECEIVE_DOG] (state, {dog}) {
    state.petName = dog
  },

  [RECEIVE_WATER] (state, {water}) {
    state.petName = water
  },

  [RECEIVE_CLASSIFY] (state, {classify}) {
    state.classify = classify
    console.log(state.classify);
  }
}
