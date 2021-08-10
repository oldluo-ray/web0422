<template>
  <div>
    app组件
    <button @click="handle">按钮-5000</button>
    <button @click="handle1">按钮-5001</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods:{
    async handle(){
      const result = await  axios({
          // url: 'http://localhost:8080/test',
          url: '/api/test',
          method: 'get',
          params:{
            name: 'zs',
            age: 18
          }
        })

        console.log(result);
    },
    async handle1(){
      const result = await  axios({
          // url: 'http://localhost:8080/test',
          url: '/atguigu/test',
          method: 'get',
          params:{
            name: 'zs',
            age: 18
          }
        })

        console.log(result);
    }
  }
}
</script>

<style>

</style>