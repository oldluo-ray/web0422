<template>
  <div>
    <!-- router-link 最终渲染完也是a标签 -->
    <router-link to="/home" replace>home</router-link>
    <router-link to="/about" active-class="select" replace>about</router-link>
    <!-- router-view书写的位置,会渲染符合路由表的组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style></style>


完整的url的组成: 协议://域名:端口号/路径?查询字符串#哈希值
完整的url的组成: 协议://域名:端口号/路径#哈希值
http://localhost:5000/#/home