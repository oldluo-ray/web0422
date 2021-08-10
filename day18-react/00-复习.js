/*

    react-router-dom: 

        路由的匹配规则:

            模糊匹配: pathname以path开头
            精确匹配: pathname和path一致  
                开启精确匹配: <Route exact></Route>

        其他组件

            Switch 
                包裹Route, 前面的匹配成功,后面的就不会再匹配了
            Redirect
                 重定向
            NavLink
                跟Link功能相同,但是会自动加类名,可以快速实现高亮

        编程式导航

            history
                push('/目标路径',数据)
                replace('/目标路径',数据)
            location
                state 接收push/replace传递过来的数据
            match
                params 接收路由参数 

                配置路由参数:
                    <Route path="/路径/:参数"></Route>

        withRouter

            作用: 让本身无法通过props获取history,location,match对象的组件,获取到这三个对象
            就是一个高阶组件的函数

        嵌套路由

            二级路由定义路由规则的时候,路径要写上一级路由的路径

    redux:

        redux的作用: 

            集中的管理数据

        使用: 
            1. 下包: npm i reudx
            2. redux是一个独立的状态管理的js库.不依赖react 
            3. redux中的三个核心概念: 
                action  需求 {type: '需求的描述'}
                reducer 具体执行修改数据的角色 函数
                store 管理的数据  对象

            4. 创建reducer 
                执行时机: 
                    1. 创建store对象,要初始化数据,要执行一次
                    2. store.dispatch(需求对象)
                function reducer(state = 初始值, action){
                    switch(action.type){

                        case 需求字符串: 
                           return的值是什么,store中state的值就被修改成什么
                            return 值

                        default: 
                            return state

                    }
                }

            5. 创建store对象
                 
                 import {createStore} from 'redux'
                 const store = createStore(reducer函数)











*/