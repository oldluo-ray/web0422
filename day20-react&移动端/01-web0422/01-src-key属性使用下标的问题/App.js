import React, { useState } from 'react'

export default function App() {
  const [list, setList] = useState([
    { id: 1, name: 'zs' },
    { id: 2, name: 'ls' },
    { id: 3, name: 'wb' },
  ])

  const handle = (e) => {
    if (e.keyCode === 13) {
      const value = e.target.value.trim()
      if (!value) return

      let obj = {
        id: Date.now(),
        name: value,
      }

      const newList = [...list]
      newList.unshift(obj)
      setList(newList)
    }
  }
  return (
    <div>
      <input type="text" onKeyUp={handle} />
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <p>{item.name}</p>
            <input type="text" />
          </li>
        ))}
      </ul>
    </div>
  )
}
