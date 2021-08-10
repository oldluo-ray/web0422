import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Test extends Component {
  constructor() {
    super()
    this.container = document.createElement('div')
  }
  render() {
    return ReactDOM.createPortal(<h1>test</h1>, this.container)
  }
  componentDidMount() {
    document.getElementById('test').appendChild(this.container)
  }
}
