// 用来创建store对象
import Vuex from 'vuex'

import Vue from 'vue'
// 在vue中使用vuex插件
Vue.use(Vuex)

const state = {
  count: 0,
}

const actions = {
  // 当调用了dispatch之后,会触发actions中指定的函数
  countFn(context, value) {
    console.log('actions执行了', context, value)
    // 要调用commit,去触发mutation中指定的函数
    context.commit('countReducer', value)
  },
}

const mutations = {
  countReducer(state, value) {
    console.log(state, value)
    // state.count = state.count + value
    state.count += value
  },
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
})
