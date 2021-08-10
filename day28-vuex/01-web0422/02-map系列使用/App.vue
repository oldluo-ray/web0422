<template>
  <div>
    <div>{{ testCount }}</div>
    <div>{{ testBigCount }}</div>
    <button @click="countFnTest(1)">按钮+1(触发action)</button>
    <button @click="countReducerTest(1)">按钮+1(直接触发mutations)_</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  computed: {
    // 不适用mapState和mapGetters的时候,在组件中使用数据,需要些$store.state.xxx 和 $store.getters.xxx 比较繁琐. 使用了这两个函数,可以将vuex中state和getters里面的数据,添加到当前组件的实例上面, 写起来就很方便了
    // ...mapState(['count']),
    // ...mapGetters(['bigCount']),
    ...mapState({ testCount: 'count' }),
    ...mapGetters({ testBigCount: 'bigCount' }),
  },
  methods: {
    // 使用mapActions和mapMutations的目的是为了让vuex帮我们创建操作数据的方法,自己就不写了
    // ...mapActions(['countFn']),
    // ...mapMutations(['countReducer']),
    ...mapActions({ countFnTest: 'countFn' }),
    ...mapMutations({ countReducerTest: 'countReducer' }),
  },
}
</script>

<style scoped></style>
