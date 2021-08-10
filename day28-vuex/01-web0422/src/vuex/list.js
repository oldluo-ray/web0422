export default {
  namespaced: true,
  state: {
    list: [{ name: 'zs' }, { name: 'ls' }, { name: 'ww' }],
  },
  getters: {
    total(state) {
      return state.list.length
    },
  },
  mutations: {
    addUser(state, value) {
      state.list.push({ name: value })
    },
  },
}
