import { connect } from 'react-redux'
import Header from '../components/Header/Header'
import { addtodo } from '../redux/actions'

export default connect(undefined, { addtodo })(Header)
// function addtodo(todo){
//     dispatch(addtodo(todo))
// }
