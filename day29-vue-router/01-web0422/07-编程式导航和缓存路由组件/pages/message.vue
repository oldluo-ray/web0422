<template>
  <div>
    <h2>message组件</h2>
    <input type="text" />
  </div>
</template>

<script>
export default {
  name: 'message',
  beforeDestroy() {
    console.log('message即将卸载')
  },
}
</script>

<style></style>
