import { connect } from 'react-redux'
import Item from '../components/Item/Item'
import { updatetodo, deletetodo } from '../redux/actions'

export default connect(undefined, { updatetodo, deletetodo })(Item)
