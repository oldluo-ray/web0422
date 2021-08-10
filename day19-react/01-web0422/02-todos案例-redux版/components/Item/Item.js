import React from 'react'
import './Item.css'
export default function Item(props) {
  const { item } = props
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={item.isDone}
          onChange={() => {
            props.updatetodo(item.id)
          }}
        />
        <span className={item.isDone ? 'active' : ''}>{item.todoName}</span>
      </label>
      <button
        className="btn btn-danger"
        onClick={() => {
          props.deletetodo(item.id)
        }}
      >
        删除
      </button>
    </li>
  )
}
