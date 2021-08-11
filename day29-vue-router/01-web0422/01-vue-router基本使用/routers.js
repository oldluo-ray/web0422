// 定义路由表的文件

import vueRouter from 'vue-router'
import Home from './pages/home'
import About from './pages/about'
export default new vueRouter({
  mode: 'history', //路由的使用模式: 默认值是hash(带#), 还有一个是history(不带#)
  routes: [
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/about',
      component: About,
    },
  ],
})
