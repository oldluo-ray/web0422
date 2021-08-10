<!-- template中定义组件的结构
    template中定义组件结构,但是有且仅有一个根标签
-->
<template>
   <div>
        <div>test</div>
        <h1></h1>
   </div>
</template>
<!-- script标签中定义组件的数据,methods,computed,watch...
   
-->
<script>
   // 注意: 一定要导出这个组件
    export default {
        name: 'Test', // 定义组件的名称,不写也可以
        data(){
            return {
                msg: 'hello'
            }
        }
    
    }
</script>

<style >

    div{
        color: red;
    }

</style>
