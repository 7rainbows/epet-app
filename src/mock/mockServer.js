/**
 * Created by 七彩城 on 2017/11/23.
 */
import Mock from 'mockjs'
//import data from './data.json'
import data from './dataMock.json'

Mock.mock('/api/cat', {
  code: 0,
  data: data.cat
})

Mock.mock('/api/dog', {
  code: 0,
  data: data.dog
})

Mock.mock('/api/water', {
  code: 0,
  data: data.water
})

Mock.mock('/api/classify', {
  code: 0,
  data: data.classify
})
