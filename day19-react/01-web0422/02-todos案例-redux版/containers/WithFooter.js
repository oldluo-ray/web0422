import { connect } from 'react-redux'
import { allcheckchange, cleardonetodos } from '../redux/actions'
import Footer from '../components/Footer/Footer'

export default connect((state) => ({ list: state.list }), {
  allcheckchange,
  cleardonetodos,
})(Footer)
