import axios from 'axios'
import {ADD ,GET_LIST} from './constants'
// 添加一个
function addItem(data){
    return {type: ADD, data}
}

// 将后台返回的数据,直接存储到redux中的需求
function getList(list){
    return {type: GET_LIST, list}
}

function getListasync(){
    // 当在展示组件中,调用getListasync的时候,由于thunk中间件的作用,会导致内部函数执行
    return async (dispatch) => {
        // 这个函数体中发送异步请求
        const result = await axios({url: 'http://127.0.0.1:5000/test'})
        dispatch(getList(result.data))
    }
}

export {addItem , getListasync}