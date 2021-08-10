<template>
 <div>
    <h1 v-show="isLoading">loading...</h1>
    <div class="row" v-show="!isLoading">
    <!-- 展示用户列表 -->
    <div class="card" v-for="user in userList" :key="user.id">
      <a target="_blank" :href="user.html_url">
        <img :src="user.avatar_url" style="width: 100px" />
      </a>
      <p class="card-text">{{user.login}}</p>
    </div>
  </div>
 
 </div>
</template>

<script>
import axios from 'axios'
export default {
 
  data() {
    return {
      userList:[],
      isLoading: false,
    }
  },
  methods:{
    async getUserName(userName){
      // console.log(userName);
      this.isLoading = true
      const result = await axios({
        url: 'https://api.github.com/search/users',
        params: {
          q: userName
        }
      })
      // console.log(result);
      this.isLoading = false
      this.userList = result.data.items


    }
  },
  mounted(){
    this.$bus.$on('searchUser', this.getUserName)
  }
}
</script>
<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>
