<template>
  <div>
    <h3>detail组件</h3>
    <div>{{ $route.params.name }}</div>
    <div>{{ $route.params.age }}</div>
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
