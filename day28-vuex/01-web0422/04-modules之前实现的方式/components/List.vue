<template>
  <div>
    <input
      type="text"
      placeholder="请输入用户名"
      v-model="userName"
      @keyup.enter="handle"
    />
    <br />
    <h2>总共{{ total }}条数据</h2>
    <ul>
      <li v-for="item in list" :key="item.name">{{ item.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  data() {
    return {
      userName: '',
    }
  },
  computed: {
    ...mapState(['list']),
    ...mapGetters(['total']),
  },
  methods: {
    handle() {
      if (!this.userName) return
      this.$store.commit('addUser', this.userName)
      this.userName = ''
    },
  },
  mounted() {
    console.log(this.list)
  },
}
</script>

<style></style>
