<template>
  <div>
    <h3>detail组件</h3>
    <div>{{ $route.query.name }}</div>
    <div>{{ $route.query.age }}</div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route)
  },
}
</script>

<style></style>
