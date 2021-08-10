import {connect} from 'react-redux'
import {addItem, getListasync} from '../redux/actions'
import List from '../components/List'
export default connect(state=>({list: state.list}), {addItem, getListasync})(List)