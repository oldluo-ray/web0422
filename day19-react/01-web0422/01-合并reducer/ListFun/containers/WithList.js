import { connect } from 'react-redux'
import { addItem, getListasync } from '../redux/actions'
import List from '../components/List'
//  connect函数第一个参数: 是为了将数据,传递展示组件
// 第二参数: 根据actionCreator创建调用了dispatch的函数,此时也仅仅是将函数传给了展示组件,还没有调用
export default connect((state) => ({ list: state.listFun.list }), {
  addItem,
  getListasync,
})(List)
