<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input type="text" placeholder="enter the name you search" v-model="userName" />&nbsp;
      <button @click="handle">Search</button>
    </div>
  </section>
</template>

<script>
export default {
  
  data() {
    return {
      userName: ''
    }
  },
  methods: {
    handle(){
      if(!this.userName) return
      this.$bus.$emit('searchUser', this.userName)
    }
  },
}
</script>
