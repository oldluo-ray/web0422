export default {
  namespaced: true,
  state: {
    sum: 0,
  },
  // 这里定义奇数加和等一等加
  actions: {
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
  },
  // 这里定义直接加和减
  mutations: {
    add(state, value) {
      state.sum += value
    },
    sub(state, value) {
      state.sum -= value
    },
  },
}
