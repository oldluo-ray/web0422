<template>
  <div>
    <h2>message组件</h2>
    <input type="text" />
  </div>
</template>

<script>
export default {
  name: 'message',
  mounted() {
    console.log('message挂载了')
  },
  beforeDestroy() {
    console.log('message即将卸载')
  },
  activated() {
    console.log('message组件被激活了')
  },
  deactivated() {
    console.log('message组件失活了')
  },
}
</script>

<style></style>
