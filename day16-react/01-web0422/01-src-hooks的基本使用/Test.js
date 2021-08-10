import React, { useEffect, useState } from 'react'

export default function Test(props) {
  // 注意: 类组件中重新渲染是render函数被调用.而函数组件中重新渲染,是整个函数体被重新调用
  //   console.log('Test组件执行了')
  // 外层函数,模拟componentDidMount 和 componentDidUpdate
  useEffect(() => {
    // 内部的函数,模拟的是componentWillUnmount
    //
    console.log('Test组件挂载或更新了')
    return () => {
      console.log('Test组件即将卸载')
    }
  }, [props.count])
  // 如果不传入第二个参数: 每次组件更新,会先执行一下卸载的代码,为了就是将在挂载的时候,设置的定时器等操作,清除掉.避免在内存中设置了多个没有意义的定时器
  // 如果传入了第二个参数: 但是是一个空的数组, 外层函数就只模拟挂载. 不模拟更新了
  // 如果传入了第二个参数: 并且里面监听了数据,当监听只要有一个发生变化,外层函数就会模拟更新,如果都没有变化,就不模拟更新

  return (
    <div>
      <h1>test组件</h1>
      <div>{props.count}</div>
      {/* <div>{msg}</div> */}
    </div>
  )
}
