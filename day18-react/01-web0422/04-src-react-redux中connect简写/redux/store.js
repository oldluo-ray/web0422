import { createStore } from 'redux'
import reducer from './reducer'
  // 2. 创建store
const store = createStore(reducer)

export default store