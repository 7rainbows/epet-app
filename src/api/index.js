/**
 * Created by 七彩城 on 2017/11/23.
 */
import axios from 'axios'
export const RESULT_OK = 0

export function reqCat() {
  return axios.get('/api/cat')
}

export function reqDog() {
  return axios.get('/api/dog')
}

export function reqWater() {
  return axios.get('/api/water')
}
