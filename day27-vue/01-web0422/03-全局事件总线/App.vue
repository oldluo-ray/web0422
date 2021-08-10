<template>
  <div>
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- 给MyHeader组件添加了一个add自定义事件 -->
        <MyHeader @add="addTodo"></MyHeader>
        <List v-show="todoList.length" :todoList="todoList" ></List>
        <MyFooter v-show="todoList.length" :todoList="todoList" :changeAllCheckBox="changeAllCheckBox" :deleteDoneTodo="deleteDoneTodo"></MyFooter>
        <h1 v-show="!todoList.length">恭喜你,没有任务</h1>
      </div>
    </div>
  </div>
</template>
<script>
//引入组件
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import List from './components/List'

// 定义和导出App跟组件
export default {
  //注意: 在组件中data必须定义成一个函数
  data() {
    return {
      todoList: JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  watch:{
    todoList:{
      deep: true,
      handler(newValue){
       console.log('todoList数据变化了',newValue);
       localStorage.setItem('todos',JSON.stringify(newValue))
      }
    }
  },
  methods: {
    addTodo(todoName) {
      // console.log(todoName)
      let todo = {
        id: Date.now(),
        todoName,
        isDone: false,
      }

      this.todoList.push(todo)
    },

    deleteTodo(id){
      // console.log(id,'删除任务执行了');
      this.todoList = this.todoList.filter(item=>item.id !== id)

    },

    changeAllCheckBox(e){
      // console.log('全选点击了',e.target.checked);
      const checked  = e.target.checked

      this.todoList.forEach(item=>{
        item.isDone = checked
      })
    },
    deleteDoneTodo(){
      // console.log('删除完成项');
      this.todoList = this.todoList.filter(item=>!item.isDone)
    }
  },
  components: {
    MyHeader,
    MyFooter,
    List,
  },
  mounted(){
    // 给$bus注册一个自定义事件
    // 其实是给vue实例添加了一个自定义的事件
    // 组件挂载的时候,往vue实例上添加自定义事件
    this.$bus.$on('deleteOne',this.deleteTodo)
  },

  beforeDestroy(){
    //组件的卸载的时候,把自定义事件移除掉.为了节省性能
    this.$bus.$off('deleteOne')
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
