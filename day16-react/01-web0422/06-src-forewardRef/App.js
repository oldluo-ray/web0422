import React, { Component } from 'react'
import Test from './Test'

export default class App extends Component {
  testRef = React.createRef()
  render() {
    return (
      <div>
        {/* ref属性写在jsx的标签中,ref对象.current拿到的是真实的dom元素 */}
        {/* ref属性写在组件上的时候,ref对象.current拿到的是当前这个组件的实例 */}
        {/* 只有类组件才能写ref属性,函数组件是不可以的 */}
        <Test xxref={this.testRef} num={1}></Test>
        <button
          onClick={() => {
            console.log(this.testRef)
          }}
        >
          按钮
        </button>
      </div>
    )
  }
}
