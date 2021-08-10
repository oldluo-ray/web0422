import React from 'react'
import Test from './Test'
import testContext from './context'
export default function App() {
  return (
    <testContext.Provider value={{ name: 'zs' }}>
      <Test></Test>
    </testContext.Provider>
  )
}
