<template>
  <div>
    <h3>detail组件</h3>
    <div>{{ name }}</div>
    <div>{{ age }}</div>
    <div>{{ num1 }}</div>
    <div>{{ num2 }}</div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route)
  },
  props: ['num1', 'num2', 'name', 'age'],
  //   props: ['name', 'age'],
}
</script>

<style></style>
