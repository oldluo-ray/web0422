import Vue from 'vue'
import App from './App'

// 配置不显示生产环境提示信息
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: (h) => h(App),
  beforeCreate(){
    // 为了让项目中其他的组件,都可以通过$bus找到vue实例
    Vue.prototype.$bus = this
  }
})
