<template>
  <div>
    <h2>news组件</h2>
    <input type="text" />
    <!-- 第一种写法:  -->
    <router-link to="/home/news/detail/zs?age=18">detail</router-link>
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
    <!-- <router-link
      :to="{
        name: 'xiangqing',
        params: {
          name: 'zs',
          age: 18,
        },
      }"
      >detail</router-link
    > -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'news',
  methods: {
    handle() {
      //   console.log(this.$router)
      //   this.$router.push({
      //     name: 'xiangqing',
      //     params: {
      //       name: 'zs',
      //       age: 18,
      //     },
      //   })
      //   this.$router.replace({
      //     name: 'xiangqing',
      //     params: {
      //       name: 'zs',
      //       age: 18,
      //     },
      //   })
      this.$router.forward()
    },
  },
  mounted() {
    console.log('news挂载了')
  },
  beforeDestroy() {
    console.log('news即将卸载')
  },

  activated() {
    console.log('news组件被激活了')
  },
  deactivated() {
    console.log('news组件失活了')
  },
}
</script>

<style></style>
