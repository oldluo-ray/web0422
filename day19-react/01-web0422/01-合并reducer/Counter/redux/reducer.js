import { COUNT } from './constants'
let initState = {
  count: 0,
}
export default function (state = initState, action) {
  switch (action.type) {
    case COUNT:
      return {
        ...state,
        count: state.count + 1,
      }
    default:
      return state
  }
}
