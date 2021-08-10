<template>
  <div>
    <Test>
      <!-- slot="header" 对应的是 <slot name="header"> -->
      <h1 slot="header">头部</h1>

      <!-- 一个具名插槽可以对应多个标签 -->
      <!-- <h2 slot="footer">尾部</h2>
      <ul slot="footer">
        <li>1</li>
      </ul> -->
      <!-- 也可以用template 包裹多个结构. 当使用了template之后,可以在template上使用slot="插槽名" 或 v-slot: 插槽名  v-slot 在template上可以使用, 其他的标签上不能用-->
      <template v-slot:footer>
        <h2 >尾部</h2>
        <ul >
          <li>1</li>
        </ul> 
      </template>
    </Test>
    <!-- <Test>
      <p>第二个Test里面的内容</p>
    </Test>
    <Test>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </Test> -->
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