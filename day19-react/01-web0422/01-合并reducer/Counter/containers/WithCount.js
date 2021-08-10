import { connect } from 'react-redux'
import Count from '../components/Count'
import { countfn } from '../redux/actions'

export default connect((state) => ({ count: state.counter.count }), { countfn })(Count)
