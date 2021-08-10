import {connect} from 'react-redux'
import Count from '../components/Count'
import { increment } from '../redux/actions'
// 这个函数是在高阶组件实例化的时候,第一次被调用
// 为了将redux中的数据,传递给Count组件
// 当redux的数据发生变化,这个函数也会被调用.目的是为了将最新的redux数据,传递给Count组件
// const mapStateToProps = (state) =>{
//     return {
//         count: state.count
//     }
// }

// const mapDispatchToProps = (dispatch) =>{
//     return {
//        inc: ()=>{
//           dispatch(increment(6))
//        },
//        dec: ()=>{
//            dispatch(decrement(8))
//        },
//        xx: ()=>{
//            dispatch()
//        },
//        yy: ()=>{
//            dispatch()
//        }
//     }
// }
// connect函数第一次调用,什么参数都不传, 展示组件中只能拿到一个dispatch方法
// connect函数第一次调用,的第一个参数如果传入一个函数,可以将redux中的数据,传递给展示组件和dispatch
// connect函数第一次调用,的第二个参数如果传入一个函数,可以将定义的函数,传递给展示组件,展示组件就无法直接获取到dispatch了,而是拿到一个新的函数
// const WithCount = connect(mapStateToProps, mapDispatchToProps)(Count)
const WithCount = connect(state=>({count: state.count}), {increment})(Count)

export default WithCount