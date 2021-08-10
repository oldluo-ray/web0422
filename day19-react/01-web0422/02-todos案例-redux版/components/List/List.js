import React from 'react'
import WithItem from '../../containers/WithItem'
import './List.css'
export default function List(props) {
  const { list } = props
  return list.length ? (
    <ul className="todo-main">
      {list.map((item) => (
        <WithItem key={item.id} item={item}></WithItem>
      ))}
    </ul>
  ) : null
}
