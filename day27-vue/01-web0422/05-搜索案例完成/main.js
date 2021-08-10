import Vue from 'vue'
import App from './App'

// 配置不显示生产环境提示信息
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: (h) => h(App),
  beforeCreate(){
    Vue.prototype.$bus = this
  }
  
})
