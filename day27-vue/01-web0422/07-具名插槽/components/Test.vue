<template>
  <div>
      <div class="header">
          <!-- slot加上name属性,这个slot就是一个具名插槽 -->
          <slot name='header'>默认内容</slot>
      </div>
      <div>content</div>
      <div class="footer">
          <slot name="footer">默认内容</slot>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>