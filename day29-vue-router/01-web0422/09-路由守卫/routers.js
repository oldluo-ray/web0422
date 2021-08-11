// 定义路由表的文件

import vueRouter from 'vue-router'
import Home from './pages/home'
import About from './pages/about'
import News from './pages/news'
import Message from './pages/message'
import Detail from './pages/detail'
const router = new vueRouter({
  // mode: 'history', //路由的使用模式: 默认值是hash(带#), 还有一个是history(不带#)
  routes: [
    {
      path: '/home',
      meta: { isAuth: true, title: '首页' },
      component: Home,
      // 用于配置嵌套路由
      children: [
        {
          name: 'news',
          // 注意: 嵌套的路由,配置path的时候,无需添加/. 如果加了就无法正常展示指定的视图了
          path: 'news',
          meta: { isAuth: true, title: '新闻' },
          component: News,
          children: [
            {
              name: 'xiangqing',
              meta: { isAuth: true, title: '详情' },
              // 定义路由参数
              path: 'detail/:name?/:age?',
              component: Detail,
              // beforeEnter(to, from, next) {
              //   // console.log(to, from)
              //   if (to.meta.isAuth) {
              //     // 判断是否有权限
              //     if (!localStorage.getItem('token')) return
              //   }
              //   next()
              // },
            },
          ],
        },
        {
          name: 'message',
          path: 'message',
          meta: { isAuth: true, title: '关于' },
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
// 注意: 只要路由切换,全局的路由守卫的回调函数就会被调用
// 全局前置路由守卫(用来做权限管理)
// 前置在路由切换之前调用
// router.beforeEach((to, from, next) => {
//   // console.log(to, from)
//   if (to.meta.isAuth) {
//     // 判断是否有权限
//     if (!localStorage.getItem('token')) return
//   }
//   next()
// })

// 全局后置路由守卫(修改title)
// 后置在路由切换之后调用
// router.afterEach((to) => {
//   document.title = to.meta.title || 'atguigu'
// })

export default router
