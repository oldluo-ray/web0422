import React, {useEffect} from 'react'
import store from './redux-test'

export default function App() {
  
  useEffect(()=>{
     store.subscribe(()=>{
       console.log('redux数据变化了', store.getState());

     })
  },[])

  return <div>
    {store.getState().count}
    <button onClick={()=>{
      store.dispatch({type: 'INCREMENT', num: 10})
    }}>按钮</button>
  </div>
}
