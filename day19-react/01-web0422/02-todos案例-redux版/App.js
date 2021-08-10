import React from 'react'
import { Provider } from 'react-redux'
import WithHeader from './containers/WithHeader'
import WithList from './containers/WithList'
import WithFooter from './containers/WithFooter'
import store from './redux/store'
import './App.css'
export default function App() {
  return (
    <Provider store={store}>
      <div className="todo-container">
        <div className="todo-wrap">
          <WithHeader></WithHeader>
          <div>
            <WithList></WithList>
            <WithFooter></WithFooter>
          </div>
        </div>
      </div>
    </Provider>
  )
}
