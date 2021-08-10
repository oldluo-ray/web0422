import Vue from 'vue'
import App from './App'
// 引入store对象
import store from './store'

// 配置不显示生产环境提示信息
Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  render: (h) => h(App),
})
