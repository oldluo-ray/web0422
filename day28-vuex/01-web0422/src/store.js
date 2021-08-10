// 1. 引入Vue和vuex
import Vue from 'vue'
import vuex from 'vuex'
import list from './vuex/list'
import sum from './vuex/sum'

// 2. 使用vuex插件
Vue.use(vuex)

export default new vuex.Store({
  modules: {
    list:list,
    sum:sum,
  },
})
