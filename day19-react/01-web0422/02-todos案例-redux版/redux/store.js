import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(
  reducer,
  process.env.NODE_ENV === 'development'
    ? window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined
)

store.subscribe(() => {
  const { list } = store.getState()
  localStorage.setItem('todolist', JSON.stringify(list))
})
export default store
