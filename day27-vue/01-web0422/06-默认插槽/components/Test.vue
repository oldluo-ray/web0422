<template>
  <div>
      <!-- 插槽 -->
      <slot>
          <!-- slot子节点的内容是默认值; 如果插槽有内容,就展示传过来的内容,如果没有展示默认内容 -->
          <h1>默认内容</h1>
      </slot>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>