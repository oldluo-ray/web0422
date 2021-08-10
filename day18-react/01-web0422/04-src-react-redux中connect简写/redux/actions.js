// 定义返回action需求对象的方法
// 这个方法有个统一的名字: 
// actionCreator
import {INCREMENT, DECREMENT} from './constants'
function increment(num){
    return {type:  INCREMENT, num}
}

export {increment}