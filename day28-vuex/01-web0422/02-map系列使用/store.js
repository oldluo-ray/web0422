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
    console.log('mutations执行了', state, value)
    // state.count = state.count + value
    state.count += value
  },
}

const getters = {
  // 类似于vue中的计算属性, 根据state中的值,计算一个新的值,新的值的属性名就是getters中函数的名称
  bigCount(state) {
    console.log('bigCount执行了')
    return state.count * 10
  },
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
})
