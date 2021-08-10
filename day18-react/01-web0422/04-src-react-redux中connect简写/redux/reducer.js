  import {INCREMENT, DECREMENT} from './constants'
  let initState = {
    count: 0,
  }
  // reducer函数在创建store的时候,会被调用一次.目的是为了初始化数据
  // 当执行了store.dispatch(需求对象) reducer会再次被调用.为了修改数据
  export default function reducer(state = initState, action) {
    //   console.log('reducer被调用了', state, action)
    // state 就是最新的数据
    // action就是需求对象
    // "@@redux/INIT9.n.y.p.u.d"
    switch (action.type) {
      case INCREMENT:
        // return的值就是修改之后的值. return的值会覆盖原来store中state的值
        return {
          ...state,
          // count: state.count
          // msg: state.msg
          // tip: state.tip
          count: state.count + action.num,
        }
      case DECREMENT:
        // return的值就是修改之后的值
        return {
          ...state,
          count: state.count - action.num,
        }
      // 为了初始化数据,一定要记得加default这行代码
      default:
        return state
    }
  }