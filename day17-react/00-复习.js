/*


    1. hooks

            学习hooks的目的: 为了在函数组件中,使用类组件中对应的功能
            hooks是什么: 函数

            useState 在函数组件中定义状态
                import {useState} from 'react'
                const [值,设置值的方法] = useState(初始值)

            useEffect 在函数组件中模拟类组件的生命周期钩子函数
                外层函数模拟挂载和更新
                useEffect(()=>{

                    模拟卸载
                    return ()=>{

                    }
                },[])

                第二个参数是空数组: 外层是挂载 ,内部是卸载

                第二个参数是数组,数据中可以监听数据:
                    如果监听的数据发生变化了, 外层函数会触发更新
                    如果监听的数据没有发生变化, 不会触发更新

            
            自定义hook 
                要求: 函数名是use开头


            hook的使用规则: 
                1. 只能在函数组件和其他hook中使用
                2. 使用时,要求在顶级作用域



    2. react路由

            路由: 一一对应规则
            后端路由: url地址和网络资源的一一对应关系
            前端路由: url中路径和视图(组件)的一一对应关系
            因为要实现单页面应用(spa)

            1. 下载包: react-router-dom
            2. 引入包中提供的组件
                BrowserRouter  监听浏览器地址栏中路径的变化
                Route  配置路由规则的一个组件
                Link  修改路径

            3. 使用:
                 1. BrowserRouter 包裹整个应用,包裹一次即可 (在入口文件中包裹App组件,或在App组件中.包裹整个App的结构)- 一个应用BrowserRouter使用一次即可
                 2. <Route path="/路径" component={组件}></Route> 可以写多次
                 3. <Link to="/路径">文本</Link> 最终渲染成a标签,会修改路径,但是不会发送请求














*/
