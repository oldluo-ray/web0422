<template>
  <div>
    <h3>detail组件</h3>
    <div>{{ $route.params.name }}</div>
    <div>{{ $route.params.age }}</div>
    <!-- <div>{{ num1 }}</div>
    <div>{{ num2 }}</div> -->
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('detail挂载了')
  },
  //   props: ['num1', 'num2', 'name', 'age'],
  //   props: ['name', 'age'],
  beforeDestroy() {
    console.log('detail卸载了')
  },
}
</script>

<style></style>
