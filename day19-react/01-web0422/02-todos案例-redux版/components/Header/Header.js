import React from 'react'
import './Header.css'
export default function Header(props) {
  function keyUpHandle(e) {
    if (e.keyCode !== 13) return

    const value = e.target.value.trim()

    if (!value) return

    // 添加数据
    props.addtodo({ id: Date.now(), todoName: value, isDone: false })
    e.target.value = ''
  }
  return (
    <div className="todo-header">
      <input type="text" onKeyUp={keyUpHandle} />
    </div>
  )
}
