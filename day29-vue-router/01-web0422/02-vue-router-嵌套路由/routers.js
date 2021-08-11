// 定义路由表的文件

import vueRouter from 'vue-router'
import Home from './pages/home'
import About from './pages/about'
import News from './pages/news'
import Message from './pages/message'
import Detail from './pages/detail'
export default new vueRouter({
  mode: 'history', //路由的使用模式: 默认值是hash(带#), 还有一个是history(不带#)
  routes: [
    {
      path: '/home',
      component: Home,
      // 用于配置嵌套路由
      children: [
        {
          // 注意: 嵌套的路由,配置path的时候,无需添加/. 如果加了就无法正常展示指定的视图了
          path: 'news',
          component: News,
          children: [
            {
              path: 'detail',
              component: Detail,
            },
          ],
        },
        {
          path: 'message',
          component: Message,
        },
      ],
    },
    {
      path: '/about',
      component: About,
    },
  ],
})
