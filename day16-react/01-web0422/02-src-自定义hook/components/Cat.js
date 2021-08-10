import React, { Component } from 'react'
// catUrl拿到的是打包之后的图片的路径
import CatUrl from '../assets/cat.gif'
import usePosition from '../usePosition'
export default function Cat() {
  let { x, y } = usePosition()
  // let { x, y } = this.props
  x += 200
  y -= 50
  return (
    <div>
      <img
        //  这里应该写打包之后的图片的路径
        src={CatUrl}
        alt=""
        style={{ position: 'absolute', left: x, top: y }}
      />
    </div>
  )
}
