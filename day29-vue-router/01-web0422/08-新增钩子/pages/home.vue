<template>
  <div>
    <h1>home组件</h1>

    <hr />
    <router-link to="/home/news">news</router-link>
    <router-link to="/home/message">message</router-link>
    <!-- 会渲染到这个router-view位置的组件(news和message都会被缓存起来-不会卸载) -->
    <!-- <keep-alive>
      <router-view></router-view>
    </keep-alive> -->
    <!-- include 后面跟着一个组件的名称,表示只缓存这一个组件 -->
    <!-- <keep-alive include="news">
      <router-view></router-view>
    </keep-alive> -->
    <keep-alive :include="['news', 'message']">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
