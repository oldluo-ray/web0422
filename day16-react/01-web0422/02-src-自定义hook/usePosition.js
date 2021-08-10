// 注意: 要将公共的状态和注册事件的逻辑封装到一个函数中.但是函数中需要使用useState和useEffect.
//所以这个函数,必须是一个自定义hook.而不能是一个普通函数
// 注意: 自定义hook其实也是一个函数,但是名字必须是useXXX格式的
import { useState, useEffect } from 'react'
export default function usePosition() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  useEffect(() => {
    window.addEventListener('mousemove', handle)
    return () => {
      window.removeEventListener('mousemove', handle)
    }
  }, [])

  function handle(e) {
    setX(e.clientX)
    setY(e.clientY)
  }

  return { x, y }
}
