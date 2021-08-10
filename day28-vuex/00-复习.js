/*

    自定义事件

        <Header @事件名="事件处理函数"></Header>

        组件的实例.$emit('事件名', 参数)

    全局事件总线

        原理: 给当前项目的vue实例注册自定义事件,所有的组件都可以获取到vue实例,从而可以让组件之间传递数据

        1. 如何所有的组件可以访问到vue实例
        在main.js中, 定义beforeCreate钩子,里面写 Vue.prototype.$bus = this

        2. 在需要接收数据的组件中,绑定自定义事件
        this.$bus.$on('自定义事件名', 事件处理函数)

        3. 在传递数据的组件中,触发事件
        this.$bus.$emit('事件名', 参数)

    配置代理服务器

        1. 在项目根目录配置vue.config.js 
        2. module.exports = {

                devServer:{
                    proxy: {
                        '/api':{
                            target: 'http://127.0.0.1:5000',
                            pathRewrite: {'^/api':''}
                            changeOrigin: true
                        }
                    }
                }



           }


    插槽

        默认插槽

            <slot>默认值</slot>   

        具名插槽
            <slot name="名字"></slot>


            组件的子节点位置: <h1 slot="名字"></h1>
            <template v-slot:名字>
            </template>

        作用域插槽

           <slot :属性名="数据"></slot>

           组件的子节点的位置上
           <template scope="变量名"></template>
           变量名 接收到的是一个对象,里面存储了slot上传递过来的所有的数据











*/
