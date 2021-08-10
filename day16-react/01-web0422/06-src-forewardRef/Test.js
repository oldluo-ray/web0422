// import React, { Component } from 'react'

// export default class Test extends Component {
//   render() {
//     return <div>Test组件</div>
//   }
// }

import React from 'react'

export default function Test(props) {
  console.log(props)
  return <div ref={props.xxref}>test</div>
}
// export default React.forwardRef((props, ref) => {
//   console.log(ref, props)
//   return <div ref={ref}>test</div>
// })
