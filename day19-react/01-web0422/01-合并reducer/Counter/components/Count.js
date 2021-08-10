import React from 'react'

export default function Count(props) {
  console.log(props)
  return (
    <div>
      <div>{props.count}</div>
      <button
        onClick={() => {
          props.countfn()
        }}
      >
        按钮
      </button>
    </div>
  )
}
