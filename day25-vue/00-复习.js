/*

    vue的基本使用:

        1. 引入vue.js 
        2. 定义模板
        3. 创建vue实例
            new Vue({
                el:'模板的选择器',
                data:{

                }
            })



    模板语法: 

        子节点的位置: {{js表达式}}
            
        标签属性的值: 不能写花括号,需要进行数据绑定 v-bind:属性名="值"

    数据绑定:

        单向: 数据=>视图 vue中的data流向视图  <input :value="msg" ></input>

        双向: 数据<=>视图  实现是因为vue中遵循了mvvm模式 <input v-model="msg" ></input>

    事件处理:

        如何注册事件: 
            <div @事件名="事件处理函数">test</div>    完整写法:v-on:事件名="事件处理函数"
            事件处理函数要定义在vue配置对象中的methods属性中
            methods:{
                事件处理函数(arg,e){}
            } 

        传递参数: 
            <div @事件名="事件处理函数(参数,$event)">test</div> 

        事件修饰符: 
            阻止默认行为: .prevent
            阻止冒泡: .stop 
            键盘事件: 回车 .enter .13
    
    计算属性:
        计算属性getter调用的时机: 
            1.  访问计算属性的时候,会调用
            2.  计算属性依赖的数据发生变化
         new Vue({
             ...,
             computed: {
                 计算属性的属性名: {
                     get(){},
                     set(value){}
                 },
                  计算属性的属性名(){
                    简写只模拟getter
                 }
             }
         })

    监视属性:
          new Vue({
             ...,
             watch:{
                 属性名: {
                     immediate: true
                     handler(){

                     }
                 }
             }
         })
         

    监视属性和计算属性的区别:
         监视的属性一定是在data中定义过的,计算属性时新增的属性

    绑定样式: 

         class 

            取值: 数组, 对象, 字符串

                [类名, 类名]

                {
                    类名: true,
                    类名:false
                }

          <div :class="['one','two']"></div>


         style

            取值: 数组, 对象, 字符串

                数组: [样式对象,样式对象]

                对象: {样式属性: 值} 不能忽略单位
        
*/