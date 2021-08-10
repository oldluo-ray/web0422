import React, {useEffect} from 'react'


export default function List(props) {
    useEffect(()=>{
        props.getListasync()
    },[])
    function handle(e){
        if(e.keyCode === 13){
            // 获取用户输入的内容
            const value = e.target.value.trim()
            if(!value) return
            // 添加数据
            let obj = {
                name: value
            }

            //需要将这个对象,添加到redux中的list属性的数组中
            props.addItem(obj)
            e.target.value = ''

        }
    }
    return (
        <div>
            <input type="text" onKeyUp={handle}/>
            <ul>
               {props.list.map((item,index)=><li key={index}>{item.name}</li>)}
            </ul>
            
        </div>
    )
}
