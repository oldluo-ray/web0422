import {
  ADDTODO,
  UPDATETODO,
  DELETETODO,
  CHANGEALLCHECK,
  CLEARDONETODOS,
} from './constants'

let list = JSON.parse(localStorage.getItem('todolist')) || []

let initState = {
  list,
}
let newtodoList = []
export default function (state = initState, action) {
  // console.log(state, action)

  switch (action.type) {
    case ADDTODO:
      // console.log(action.todo)
      newtodoList = [...state.list]
      newtodoList.push(action.todo)
      return {
        ...state,
        list: newtodoList,
      }
    case UPDATETODO:
      // 需要数据: id
      const { id } = action
      // newtodoList = [...state.list]
      // newtodoList.forEach((item) => {
      //   if (item.id === id) {
      //     item.isDone = !item.isDone
      //   }
      // })
      // 上面的代码,可以修改数据,但是数组中的对象还是原来的对象,react-redux的高阶组件,不认为数据变化了
      // 需求: 只改变数组的地址,
      //   高阶组件并不会认为我们修改了数据,
      //   所以现在不仅要修改数组的地址,
      //   还要将数组中的对象,
      //   也写成新的对象
      newtodoList = state.list.map((item) => {
        if (item.id === id) item.isDone = !item.isDone
        return { ...item }
      })
      // console.log(newtodoList)
      // console.log(newtodoList[0] === state.list[0])

      return {
        ...state,
        list: newtodoList,
      }

    case DELETETODO:
      newtodoList = state.list.filter((item) => item.id !== action.id)
      return {
        ...state,
        list: newtodoList,
      }
    case CHANGEALLCHECK:
      let result = state.list.every((item) => item.isDone)

      newtodoList = state.list.map((item) => {
        item.isDone = !result
        return { ...item }
      })

      return {
        ...state,
        list: newtodoList,
      }
    case CLEARDONETODOS:
      newtodoList = state.list.filter((item) => !item.isDone)

      return {
        ...state,
        list: newtodoList,
      }

    default:
      return state
  }
}
