import React, { Component } from 'react'
import Test from './Test'
export default class App extends Component {
  render() {
    return (
      <div>
        <p>这是p标签</p>
        {/* react中的组件,写在哪里,对应的组件中的结构就渲染到哪里 */}
        <Test></Test>
        <span>这是span</span>
      </div>
    )
  }
}
