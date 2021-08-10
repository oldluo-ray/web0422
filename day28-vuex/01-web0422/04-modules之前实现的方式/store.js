// 1. 引入Vue和vuex
import Vue from 'vue'
import vuex from 'vuex'

// 2. 使用vuex插件
Vue.use(vuex)

const state = {
  sum: 0,
  list: [{ name: 'zs' }, { name: 'ls' }, { name: 'ww' }],
}

const getters = {
  total(state) {
    return state.list.length
  },
}

// 这里定义奇数加和等一等加
const actions = {
  oddJia({ commit, state }, value) {
    if (state.sum % 2 !== 0) {
      commit('add', value)
    }
  },
  waitJia({ commit }, value) {
    setTimeout(() => {
      commit('add', value)
    }, 1000)
  },
}

// 这里定义直接加和减
const mutations = {
  add(state, value) {
    state.sum += value
  },
  sub(state, value) {
    state.sum -= value
  },
  addUser(state, value) {
    state.list.push({ name: value })
  },
}

export default new vuex.Store({
  state,
  actions,
  mutations,
  getters,
})
