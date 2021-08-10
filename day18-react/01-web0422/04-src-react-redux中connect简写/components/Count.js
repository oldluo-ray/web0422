import React from 'react'

export default function Count(props) {
    console.log(props);
    // props中可以获取到高阶组件中传递下来的redux数据和dispatch方法(用来修改redux数据)
    return (
        <div>
            <div>{props.count}</div>
            <button onClick={()=>{
                // 注意: 这里拿到的increment函数不是传入的那个名为increment的actionCreator.
                // function increment(num){
                //     // dispatch里面的increment才是传入的actionCreator
                //     dispatch(increment(num))
                // }
                props.increment(8)
            }}>按钮</button>
        </div>
    )
}

