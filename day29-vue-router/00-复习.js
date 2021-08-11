/*

    vux的基本使用

        1. 下载包 vuex 
        2. 创建store对象
       
        export default new vuex.Store({
            state:{
                属性: 值
            },
            actions: {
                函数名({commit, state}, value){}
            }
            mutations: {
                函数(state,value){}
            }
            getters:{
                函数(state){}
            }
        })

        3. 使用vuex插件
        Vue.use(vuex)

        4. $store.state.属性/ $store.getters.属性


    map系列及作用

        import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

        mapState, mapGetters 是给当前组件的实例添加计算属性

        computed:{
            ...mapState(['属性','属性'])
            ...mapGetters(['属性','属性'])
        }

        mapActions, mapMutations 是给当前组件实例添加方法
        methods:{
            ...mapActions(['函数名','函数名])
            ...mapMutations(['函数名','函数名])
        }


    
    modules

        在实际开发中,协作开发.需要模块化开发

        export default new vuex.Store({
            modules:{
                属性: 指定组件的vuex的配置对象
                属性: 指定组件的vuex的配置对象
            }
        })

        某个组件的vuex的配置对象

        export default {
            namespcaced: true
            state:{},
            actions:{},
            getters:{},
            mutations:{}

        }


        在组件中: 

             computed:{
                ...mapState('属性名',['属性','属性'])
                ...mapGetters('属性名',['属性','属性'])
            }

             methods:{
            ...mapActions(['属性名','函数名])
            ...mapMutations(['属性名','函数名])
        }
        注意: 这些第一个位置的属性名要和new vuex.Store的配置项modules的属性名保持一致



        vuex工作流程: 
            完整的工作流程: 组件中执行 $store.dispatch() ==> 触发了actions中指定的函数 ==>  在actions的指定函数中执行了 $store.commit() ==> 触发了mutations中的指定函数 ==> state中的数据发生变化 ==> 将新的数据流向组件

            mutations中的函数,应该是一个纯函数,不应该在里面写异步操作. 

*/
