// import React from 'react'
// import ReactDOM from 'react-dom'

// import './index.css'

// // 引入根组件
// import App from './App'

// ReactDOM.render(<App />, document.getElementById('root'))

import { createStore } from 'redux'

function reducer(state = { count: 0 }, action) {
  switch (action.type) {
    default:
      return state
  }
}
// createStore 里面的第二个参数,是一个可选参数,用来给redux初始化数据,优先级高于reducer中初始化的数据.但是实际开发中,要协作开发,为了避免代码冲突,所以更常用的情况是在reducer中初始化,而不是在创建store的时候初始化

const store = createStore(reducer, { msg: 123 })
console.log(store.getState())
