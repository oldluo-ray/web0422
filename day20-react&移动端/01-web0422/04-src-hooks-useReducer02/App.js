import React from 'react'
import Count from './Count'
export default function App() {
  return (
    <div>
      <Count initialCount={0}></Count>
      <Count initialCount={10}></Count>
    </div>
  )
}
