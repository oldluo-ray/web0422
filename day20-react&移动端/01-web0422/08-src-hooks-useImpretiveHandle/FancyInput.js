import React, { useRef, useImperativeHandle, forwardRef } from 'react'
function FancyInput(props, ref) {
  const inputRef = useRef()
  useImperativeHandle(ref, () => ({
    focus: () => {
      console.log(1231231)
      inputRef.current.focus()
    },
  }))
  return <input ref={inputRef} />
  // return <input ref={ref} />
}
FancyInput = forwardRef(FancyInput)
export default FancyInput
