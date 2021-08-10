<template>
  <div>
    {{ $store.state.count }}
    <button @click="handle">按钮+1</button>
  </div>
</template>

<script>
export default {
  methods: {
    handle() {
      // 触发actions中的指定函数
      // this.$store.dispatch('countFn', 1)
      this.$store.commit('countReducer', 1)
    },
  },
}
</script>

<style scoped></style>
