import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './Home'
import Detail from './Detail'
export default function App() {
  return (
    // BrowserRouter 帮我们监听路径的变化
    <BrowserRouter>
      <Link to="/home">home</Link>
      <Link to="/detail">Detail</Link>
      {/* Route 帮我们配置前端路由规则 */}
      <Route path="/home" component={Home}></Route>
      <Route path="/detail" component={Detail}></Route>
    </BrowserRouter>
  )
}
