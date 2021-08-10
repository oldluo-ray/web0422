import {createStore, applyMiddleware} from 'redux'
// redux-thunk是帮助我们在redux中发送异步请求的中间件
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import reducer from './reducer'

// applyMiddleware(中间件, 中间件, 中间件)是在redux中配置中间件的一个方法
// const store = createStore(reducer, applyMiddleware(thunk))
// process.env.NODE_ENV // 可以获取到当前是开发还是生产环境 developement/prodcution
const store = createStore(reducer, process.env.NODE_ENV === 'development' ? composeWithDevTools(applyMiddleware(thunk)) : applyMiddleware(thunk))

export default store