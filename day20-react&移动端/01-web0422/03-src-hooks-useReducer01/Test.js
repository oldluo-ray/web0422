import React, { useReducer } from 'react'

const initialState = { count: 0, msg: '哈哈' }

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'decrement':
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      throw new Error()
  }
}

export default function Test() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      Count: {state.count}
      msg: {state.msg}
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  )
}
