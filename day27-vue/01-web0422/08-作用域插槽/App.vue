<template>
  <div>
    <Test>
      <!-- 应该使用template标签去接收插槽传过来的数据 -->
        <template scope="xxx">
            <div>{{xxx.msg}}</div>
            <div>{{xxx.demo}}</div>
            <ul>
              <li v-for="(item,index) in xxx.games" :key="index">{{item}}</li>
            </ul>
        </template>
    </Test>
   
  </div>
</template>

<script>
import Test from './components/Test'
export default {
    components:{
      Test
    }
}
</script>

<style>

</style>