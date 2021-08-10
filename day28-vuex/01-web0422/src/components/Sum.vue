<template>
  <div>
    <h1>和为: {{ sum }}</h1>
    <select name="" id="" v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add(n)">+</button>
    <button @click="sub(n)">-</button>
    <button @click="oddJia(n)">和为奇数时加</button>
    <button @click="waitJia(n)">等一等加</button>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {
      n: 1,
    }
  },
  computed: {
    ...mapState('sum', ['sum']),
  },
  methods: {
    ...mapMutations('sum', ['add', 'sub']),
    ...mapActions('sum', ['oddJia', 'waitJia']),
  },
  mounted() {
    console.log(this)
  },
}
</script>

<style></style>
