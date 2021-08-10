/*

    localStorage

            存: localStorage.setItem('键',值)
            取: localStorage.getItem('键')

            注意: 不能存储数组和对象,要转成字符串再存


    组件的生命周期

        挂载
            constructor  执行一次
            render   执行多次
            componentDIdMount  执行一次(页面已经渲染完成了)
        更新  setState, 新的props和forceUpdate
            render   执行多次
            componentDidUpdate 更新完毕
        卸载
            componentWillUnmount 即将卸载


    组件通讯

        props
            1. 组件要有关系
            2. 自上而下传递
            3. 不能跨级传递数据

        context 
            1. 组件也要有关系
            2. 自上而下传递
            3. 可以跨级


            1. 创建context对象, 要保证使用的是同一个context
            2. 从context对象身上解构一个组件 Provider 在需要传递数据的组件中,使用Provider包裹组件的整个jsx结构, value属性的值,就是要传递的数据
                class App extends React.Component {
                    render(){
                        return <Provider value={要传递的值}>
                                jsx
                        </Provider>
                    }

                }
            3. 在需要使用组件中
                3.1  从context中解构一个Consumer的组件, 在需要使用数据的组件中在render函数的return 后面使用Consumer.在Consumer的子节点的位置上,写一个箭头函数,箭头函数接收的值就是传递过来的数据,返回值,就是这个组件的jsx结构

                class Test extends React.Component{
                    render(){
                        return <Consumer>{(数据)=> jsx}</Consumer>
                    }
                }

                3.2 给需要使用数据的组件,添加静态属性,contextType.值为context对象
                    通过当前组件实例的context属性,直接获取到值

                 class Test extends React.Component{
                     static contextType = context对象
                    render(){
                        this.context拿到传递过来的值
                        return jsx
                    }
                }


             创建context对象时,传入的默认值
             React.createContext(默认值) . 不写Provider的时候生效
             不要传递过大的数据,一般传递语言,主体

        pubsub
                发布订阅机制

                组件之间可以没有关系
                第三方的包 

                组件可以是发布者,也可以是订阅者











*/
