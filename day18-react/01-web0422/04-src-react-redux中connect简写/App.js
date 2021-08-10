import React from 'react'
import {Provider} from 'react-redux'
import WithCount from './containers/WithCount'
import store from './redux/store'
export default function App() {
  return (
    // 作用: 就是将redux中的store传递给App组件下面,所有需要用到store对象的组件中(通过connect函数得到的高阶组件里面要使用)
    <Provider store={store}>
        <WithCount></WithCount>
    </Provider>
  )
}
