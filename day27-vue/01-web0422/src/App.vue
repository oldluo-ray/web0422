<template>
  <div>
    <!-- <transition name="hello" appear>
      <h1 v-show="isShow">你好啊</h1>
    </transition> -->
    <!-- transition 只能包裹一个元素. 如果要包裹多个元素,应该使用transition-group,里面的每一个元素加上key属性 -->
    <transition-group name="test" appear>
      <h1 v-show="isShow" key="1">你好啊</h1>
       <h2 v-show="isShow" key='2'>你好啊 !</h2>
    </transition-group>
   
    <button @click="handle">展示/隐藏</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isShow: true
    }
  },
  methods:{
    handle(){
      this.isShow = !this.isShow
    }
  }
}
</script>

<style>
  h2{
    background-color: orange;
  }
  .hello-enter-active, .hello-leave-active{
    transition: opacity 1s;
  }

  .hello-enter, .hello-leave-to{
    opacity: 0
  }

  .demo-enter-active, .demo-leave-active{
    transition: 1s;
  }

  .demo-enter, .demo-leave-to{
    transform: translateX(-100%);
  }

  .demo-enter-to, .demo-leave{
     transform: translateX(0);
  }

  @keyframes atguigu {
    from {
      transform: translateX(-100%);
    }

    to {
      transform: translateX(0px);
    }
  }
  .test-enter-active{
    animation: atguigu 1s ;
  }

  .test-leave-active{
   animation: atguigu 1s reverse;
  }


  

</style>