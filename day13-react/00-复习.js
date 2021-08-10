/*
    react需要的包有哪些?
        react.js
        react-dom.js 
        babel.js

    react构建页面

        命令式:  React.createElement('标签名', {属性:值}, 子节点)
        声明式:  let div = <div></div>
    
    jsx中如何插入数据

        使用插值表达式

            插值表达式中可以写: js表达式 

            如果要渲染数据,不要写对象,函数,布尔值

    jsx中如何操作标签属性的值

        <div className={} ></div>


    jsx中如何添加样式

        类名  <div className={'类名'} ></div>
        行内  <div style={{属性: 值}}></div> 单位可以忽略, 小驼峰命名法

    jsx中如何注册事件
        <div onClick={事件处理函数}></div>

        事件处理函数中this ==> undefined

          <a onClick={事件处理函数}></a> 阻止默认行为: e.preventDefault()


    jsx中如何列表渲染

        根据数据,创建一个数组,数组中存放了需要的jsx结构.直接渲染数组即可

        react要求在列表渲染的时候,添加key属性.为了性能优化


    react中组件有几种?如何定义?

        函数组件和类组件

        函数组件: 


            function App(){
                return jsx
            }


        类组件: 

            class App extends React.Component{
                    render(){
                        return jsx
                    }
            }







*/