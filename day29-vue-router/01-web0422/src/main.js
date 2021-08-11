import Vue from 'vue'
import App from './App'
// import 'element-ui/lib/theme-chalk/index.css'
import ElementUI, { Button } from 'element-ui'
import Test from './Test'
// 配置不显示生产环境提示信息
Vue.config.productionTip = false

Vue.use(ElementUI)
console.log(Button.name)
Vue.component('ElButton', Button)
Vue.component('AtguiguTest', Test)

new Vue({
  el: '#app',

  render: (h) => h(App),
})
