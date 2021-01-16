import { test } from '../../api/base'

export default {
  namespaced: true,
  // 重要信息：state 必须是一个函数，
  // 因此可以创建多个实例化该模块
  state :{
    count: 'loading'
  },
  actions: {
    inc: ({ commit }) => {
      return test().then(item => {
        commit('inc', { item })
      })
    }
  },
  mutations: {
    inc: (state, {item}) => state.count = item
  }
}