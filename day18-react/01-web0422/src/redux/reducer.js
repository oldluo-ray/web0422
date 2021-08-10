import { ADD, GET_LIST } from "./constants";
let initState = {
    list: []
}
export default function(state=initState, action){
    switch(action.type){
        case ADD:
            // 用户对象
            let obj = action.data

            const newList = [...state.list]
            newList.push(obj)

            return {
                ...state,
                list:newList
            }

        case GET_LIST: 
            return {
                ...state,
                list: action.list
            }
         default: 
            return state

    }
    
}