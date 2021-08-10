import React, { useState } from 'react'
import Test from './Test'
import Test1 from './Test1'
export default function App() {
  // state = {}
  // 在函数组件中定义状态
  // const [变量名, 修改数据的方法] = useState(状态的默认值)
  const [count, setCount] = useState(100)
  const [msg, setMsg] = useState('test')

  return (
    <div>
      <div>{count}</div>
      <div>{msg}</div>
      <button
        onClick={() => {
          // setXXX 这个方法,类似于setState,可以修改数据,也可以渲染页面
          setCount(count + 1)
          setMsg(msg + 2)
        }}
      >
        按钮
      </button>
      {/* {count === 100 && } */}
      <Test count={count}></Test>
    </div>
  )
}
