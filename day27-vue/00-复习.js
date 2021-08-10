/*

  生命周期钩子函数

        beforeCreate  实例上还没有数据
        created    实例上可以获取数据
        beforeMount  还没有真实dom 
        mounted     真实dom已经创建
        beforeUpdate  数据是新的,dom是旧的
        updated    数据是新的, dom也是新的
        beforedestroy  实例即将卸载  清除操作
        destroyed  数据在,但是页面不会渲染了



  单文件组件

        文件名.vue 

        <template></template>  template中用来定义组件的结构,必须有一个根标签
        <script></script> 定义数据方法等..
        <style></style> 组件的样式 添加scoped 样式只对组件生效

  ref 

        Test组件
        <template>
            <h1 ref="title"></h1>
            <School ref="school"></School>
        </template>

        <script>
            methods:{
                handle(){
                    this.$refs.title  h1的真实dom
                    this.$refs.school  school组件的实例对象
                }
            }
        </script>

  props 
             用来将父组件的数据传递给子组件


             子组件中接收: 

                props: ['属性名','属性名']
                props: {
                    属性名: 数据类型
                }
                props: {
                    属性名: {
                        type: 数据类型,
                        required: true,
                        default: 默认值
                    }
                }

     

  mixin 

     需求: 全局混入一个数据 x: 0 

     定义混入对象: 
     {
        data(){
            return {
               属性:值 
            }
        }
        methods:{
            方法名(){}
        }
     }

     Vue.mixin(混入对象)

    注意: 如果数据冲突了, 组件数据优先
          如果方法冲突了, 组件方法优先
          如果钩子函数冲突了, 合并成一个数组,都会调用



  插件

     定义

        {
            install(Vue, ...arg){

            }
        }

     使用

        main.js中
        Vue.use(插件)














*/