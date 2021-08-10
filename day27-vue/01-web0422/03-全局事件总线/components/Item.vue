<template>
  <li @mouseenter="enterHandle" @mouseleave="leaveHandle">
    <label>
      <input type="checkbox" v-model="todo.isDone" />
      <span :class="todo.isDone ? 'active' : ''">{{ todo.todoName }}</span>
    </label>
    <button
      class="btn btn-danger"
      :style="{ display: isShow ? 'block' : 'none' }"
      @click="handle"
    >
      删除
    </button>
  </li>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    enterHandle() {
      this.isShow = true
    },
    leaveHandle() {
      this.isShow = false
    },
    // 点击删除按钮,触发事件总线(vue实例上的自定义事件)
    handle(){
      this.$bus.$emit('deleteOne', this.todo.id)
    }
  },
  props: ['todo'],
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li label span.active {
  color: #666;
  text-decoration: line-through;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
</style>
