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

  beforeRouteEnter(to, from, next) {
    console.log('组件内路由守卫-进入之前', to, from)
    if (to.meta.isAuth) {
      if (to.meta.isAuth) {
        // 判断是否有权限
        if (!localStorage.getItem('token')) return
      }
      next()
    }
  },

  //通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log('组件内路由守卫-离开时', to, from)
    next()
  },
}
</script>

<style></style>
