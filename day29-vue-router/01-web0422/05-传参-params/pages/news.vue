<template>
  <div>
    <h2>news组件</h2>
    <!-- 第一种写法:  -->
    <!-- <router-link to="/home/news/detail/zs/18">detail</router-link> -->
    <!-- 第二种写法:  
        注意: 如果写了path.params的参数就不会自动拼接到路径中
    -->
    <!-- <router-link
      :to="{
        path: '/home/news/detail',
        params: {
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
        params: {
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
