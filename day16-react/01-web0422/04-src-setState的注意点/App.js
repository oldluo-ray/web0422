import React, { Component } from 'react'

export default class App extends Component {
  state = {
    count: 0,
    msg: '',
  }
  render() {
    return (
      <div>
        <div id="box">{this.state.count}</div>
        <div>{this.state.msg}</div>
        <button
          onClick={() => {
            // this.setState({
            //   count: this.state.count + 1,
            //   msg: '123',
            // })
            // this.setState({
            //   count: this.state.count + 2,
            // })
            // this.setState({
            //   count: this.state.count + 3,
            // })
            // this.setState({
            //   // count: this.state.count + 1,
            //   msg: '123',
            //   // count: this.state.count + 2,
            //   count: this.state.count + 3,
            // })
            // 如果第一个参数,状态修改完成之后,回调函数才会被调用.
            // this.setState((state, props) => {
            //   console.log(props) //获取props
            //   console.log(state.count, 1)
            //   return {
            //     count: state.count + 1,
            //   }
            // })
            // this.setState((state) => {
            //   console.log(state.count, 2)
            //   return {
            //     count: state.count + 2,
            //   }
            // })
            // this.setState((state) => {
            //   console.log(state.count, 3)
            //   return {
            //     count: state.count + 3,
            //   }
            // })
            // this.setState(
            //   {
            //     count: this.state.count + 1,
            //   },
            //   () => {
            //     console.log('当数据修改完毕,并且视图更新完成才调用')
            //     console.log(this.state.count)
            //     console.log(document.getElementById('box'))
            //   }
            // )
          }}
        >
          +
        </button>
      </div>
    )
  }
}
