/*


    pubsub 

        第三方的包
        组件无需有关系 

        npm i pubsub-js

        import PubSub from 'pubsub-js'

        PubSub.subscribe('话题', (msg,data)=>{}) 返回这次订阅的唯一标识符

        PubSub.publish('话题', 数据)

    Fragment

        jsx有且仅有一个根标签, 如果写div或其他标签,会渲染到页面上

        使用Fragment包裹结构,就不会额外的渲染标签

        <React.Fragment></React.Fragment>
        <></>    

    性能优化

        减轻state 

            根渲染页面无关的数据,不要存储到state上面

        shouldComponentUpdate 

            在更新阶段渲染, 接收新的props和新的state 

            判断新的数据和旧的数据是否有变化,如果有就return true,则重新渲染, 否则return false 就不渲染

        PureComponent

            使用: 替换类组件中的Component组件
            注意: 纯组件帮助我们比较数据的时候,使用的是浅层对比, 所以我们修改数据的时候,不要直接修改数据本身.因为根据原来的数据,得到一份新的数据




    高阶组件

        function withXXX(需要用到数据的组件){
            return class extends Component{
                ...公共的状态和逻辑

                render(){
                    return 需要数据的组件
                }
            }
        }

        const WithXXX = withXXX(需要数据的组件)

        <WithXXX></WithXXX>


    renderprops

        class XXX extends Component {
            ...公共的状态和逻辑

            render(){
                return this.props.render(数据)
                return this.props.chilren(数据)
            }
        }

        <XXX render={(数据)=>return 需要数据的组件}></XXX>
        <XXX >{(数据)=>return 需要数据的组件}</XXX>

    高阶组件和renderProps的原理: 给每一个需要用到公共状态和逻辑的组件,添加一个父组件,状态和逻辑在父组件.父组件,通过props传递数据的逻辑

    作用: 为了将公共的状态和逻辑封装起来(只写一次)










*/
