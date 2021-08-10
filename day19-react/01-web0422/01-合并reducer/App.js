import React from 'react'
import { Provider } from 'react-redux'
import WithList from './ListFun/containers/WithList'
import WithCount from './Counter/containers/WithCount'
import store from './store'
export default function App() {
  return (
    <Provider store={store}>
      <WithList></WithList>
      <WithCount></WithCount>
    </Provider>
  )
}
