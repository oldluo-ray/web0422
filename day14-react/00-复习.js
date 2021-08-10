/*

    1. 操作状态
        只有类组件可以定义状态,函数组件是不可以的
        定义: 
        constructor(){
            super()
            this.state = {}
        }
        简写: 
        state = {}

        获取: 
           this.state.属性名

        操作: 
            this.setState({
                属性: 值
            })

            1. 修改数据 2. 更新视图


            
    2. this指向问题

          原因:  事件处理函数中的this有问题.this指向了undefined 

          解决: 
            handle(){}
            1. 箭头函数法: <div onClick={()=>{this.handle()}}></div>
            2. bind方法: constructor(){ this.handle = this.handle.bind(this) }
            3. 类的实例方法: handle = () => {}

    3. props

           组件接收外部数据 

           传: <Count 属性={值}></Count>

           类组件:  this.props
           函数组件:  function Test(props){}

           props的特点: 

                1. 可以接收任何数据类型 
                2. 只能读取不能设置

            父给子  直接props传递
            子给父  父组件定义函数,将这个函数通过props传递给子组件,子组件调用函数,将参数当做实参,传递给父组件
            兄弟之间传递 状态提升


    4. 操作表单

            非受控组件

                直接操作dom 

                    const xxxRef = React.createRef()

                    <div ref={xxxRef}></div>

                    xxxRef.current


            受控组件

                    表单项的值被组件的状态所控制

                    文本,文本域,下拉框  value 
                    复选框  checked

                    需要onChange配合 获取用户输入,修改state的值
            












*/