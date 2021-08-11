import Vue from 'vue'
import App from './App'
import vueRouter from 'vue-router'
import router from './routers'
// 配置不显示生产环境提示信息
Vue.config.productionTip = false
Vue.use(vueRouter)

new Vue({
  el: '#app',
  router,
  render: (h) => h(App),
})
