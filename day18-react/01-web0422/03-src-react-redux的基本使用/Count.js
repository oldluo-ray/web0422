import React from 'react'
import {connect} from 'react-redux'
 function Count(props) {
    // props中可以获取到高阶组件中传递下来的redux数据和dispatch方法(用来修改redux数据)
    return (
        <div>
            <div>{props.count}</div>
            <button onClick={()=>{
                props.dispatch({type: 'INCREMENT', num: 5})
            }}>按钮</button>
        </div>
    )
}

// 这个函数是在高阶组件实例化的时候,第一次被调用
// 为了将redux中的数据,传递给Count组件
// 当redux的数据发生变化,这个函数也会被调用.目的是为了将最新的redux数据,传递给Count组件
const mapStateToProps = (state) =>{
    console.log('mapStateToProps执行了',state);
    return {
        count: state.count
    }
}

const WithCount = connect(mapStateToProps)(Count)

export default WithCount
