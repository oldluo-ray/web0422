/*

    条件渲染

        v-if  会删除要隐藏的节点
        v-show 会通过样式隐藏节点

    列表渲染

        v-for="(item,index) in 数组"  :key="index"

    收集表单数据

        多个复选框 绑定数据时,数据的值的类型是数组  数组中存储的是checkbox上的value的值
        一个复选框 直接写v-model="数据"

    过滤器

        全局过滤器 所有vue实例对应的模板都可以使用 Vue.filter('过滤器名称',(value)=>{})

        局部过滤器 局部的过滤器只能在当前vue实例所绑定的模板中使用
        new Vue({
            ...,
            filters:{
                过滤器名称(value){}
            }
        })


        过滤器的使用:
        
            {{date | 过滤器 | 过滤器}}
            v-bind:属性="date | 过滤器 | 过滤器"

            过滤器不会修改原始值




    内置指令

        v-text 将绑定的数据,直接添加到子节点的位置, 不会解析html标签
        v-html 将绑定的数据,直接添加到子节点的位置, 会解析html标签
        v-cloak  可以默认让指定的标签,先隐藏.当vue实例解析了模板之后,vue会自动删除标签的v-cloak. 标签会渲染出来 v-cloak不需要定义值


    自定义指令

        全局指令

            Vue.directive(指令名,{
                bind(element, binding){
                    binding.value 可以接收到自定义指令绑定的数据
                   当元素和指令绑定成功的时候调用  
                },
                inserted(element, binding){
                    当元素真正插入到页面中的时候调用
                },
                update(element, binding){
                    当模板重新解析的时候调用
                }
            })



        局部指令

            new Vue({
                ...,
                directives:{
                    // 简写形式,简写了bind和update
                    指令名(element,binding){}
                }
            })


            

            注意: 过滤器和指令中的函数中this都指向window


*/