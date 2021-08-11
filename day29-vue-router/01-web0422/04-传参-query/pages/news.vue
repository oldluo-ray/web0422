<template>
  <div>
    <h2>news组件</h2>
    <!-- 第一种写法:  -->
    <!-- <router-link to="/home/news/detail?name=zs&age=18">detail</router-link> -->
    <!-- 第二种写法:  -->
    <!-- <router-link
      :to="{
        path: '/home/news/detail',
        query: {
          name: 'zs',
          age: 18,
        },
      }"
      >detail</router-link
    > -->
    <!-- 第三种写法: 配置了name的写法 -->
    <router-link
      :to="{
        name: 'xiangqing',
        query: {
          name: 'zs',
          age: 18,
        },
      }"
      >detail</router-link
    >
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
