//定义用来渲染页面的函数
function render(data) {
  if (data.length) {
    // 展示列表和底部
    document.querySelector('.todo-main').style.display = 'block'
    document.querySelector('.todo-footer').style.display = 'block'
    document.querySelector('.tip').style.display = 'none'
  } else {
    // 不展示列表和底部
    document.querySelector('.todo-main').style.display = 'none'
    document.querySelector('.todo-footer').style.display = 'none'
    document.querySelector('.tip').style.display = 'block'
    return
  }
  let arr = data.map((item) => {
    return `<li>
                <label>
                    <input type="checkbox" ${
                      item.isDone ? 'checked' : ''
                    } data-id=${item._id} />
                    <span class=${item.isDone ? 'active' : ''}>${
      item.todoName
    }</span>
                </label>
                <button class="btn btn-danger" data-id=${
                  item._id
                } >删除</button>
              </li>`
  })

  document.querySelector('.todo-main').innerHTML = arr.join('')

  // 渲染footer
  // 渲染全选按钮
  const allTotal = data.length
  const doneTotal = data.filter((item) => item.isDone).length
  const allCheckBox = document.querySelector('.todo-footer input')
  allCheckBox.checked = allTotal === doneTotal
  //渲染计数值
  const allCount = document.querySelector('#allTotal')
  const doneCount = document.querySelector('#doneTotal')
  allCount.innerText = allTotal
  doneCount.innerText = doneTotal
}

// 需求1: 获取任务列表信息,渲染到页面上
//定义用来接收jsonp跨域数据的函数
function callback(data) {
  //   console.log(data)
  // 动态的根据数据,创建li标签
  // 渲染列表
  render(data)
}
// 获取所有数据使用的是jsonp技术,所以动态创建script标签,发送请求
const script = document.createElement('script')
script.src = 'http://127.0.0.1:5000/findTodos?callback=callback'
document.body.appendChild(script)

// 需求2: 输入任务名,按下回车键之后,添加任务
const todoNameInput = document.querySelector('.todo-header input')
todoNameInput.onkeyup = async function (e) {
  if (e.keyCode === 13) {
    // 获取用户输入的任务名
    const todoName = this.value.trim()
    if (!todoName) return
    const todolist = await myAjax({
      url: 'http://127.0.0.1:5000/addTodo',
      type: 'post',
      data: {
        todoName,
      },
    })
    this.value = ''
    //根据数据渲染页面
    render(todolist)
  }
}

//需求3: 点击复选框,修改当前这条数据的状态
// 由于任务列表是动态创建到页面上的.所以在这里无法获取到我们的li标签,所以需要使用事件委托
const todoMain = document.querySelector('.todo-main')
todoMain.onclick = async function (e) {
  //由于事件委托,点击了任何一个子元素,都会触发.但是当前的逻辑是点击复选框的时候,修改当前这条数据的状态.所以要判断当前点击的是否是复选框,是复选框才执行后续的代码
  if (e.target.type === 'checkbox') {
    // 获取参数:
    //  id : 要修改的数据的id
    const id = e.target.dataset.id
    //  isDone: 数据要改成什么状态
    const isDone = e.target.checked

    //发送ajax请求
    const todolist = await myAjax({
      url: 'http://127.0.0.1:5000/updateOneTodo',
      type: 'post',
      data: {
        id,
        isDone,
      },
    })
    //重新渲染页面
    render(todolist)
  }
}

// 需求4: 删除一条任务数据.   注意: 给同一个元素注册同一个事件,使用on+事件名会覆盖.使用addEventListener不会覆盖
todoMain.addEventListener('click', async function (e) {
  if (e.target.nodeName === 'BUTTON') {
    // 获取ids: ["id值"]
    const id = e.target.dataset.id
    let ids = [id]
    // 注意: 由于myAjax中要将传入的数据,拼接成一个字符串.数组会自动toString().格式被修改了,所以服务器接收到的就是[id值]了.需要我们先将数组,转成json字符串,然后再传入myAjax中
    ids = JSON.stringify(ids)
    const todolist = await myAjax({
      url: 'http://127.0.0.1:5000/deleteTodos',
      type: 'post',
      data: {
        ids,
      },
    })

    render(todolist)
  }
})

// 需求5: 全选按钮,点击将所有数据改成选中或不选中
const allCheckedInput = document.querySelector('.todo-footer input')
allCheckedInput.onclick = async function () {
  const isDone = this.checked
  const todolist = await myAjax({
    url: 'http://127.0.0.1:5000/updateAllTodos',
    type: 'post',
    data: {
      isDone,
    },
  })

  render(todolist)
}

// 需求6: 删除所有已完成项
const deleteAllDone = document.querySelector('.todo-footer button')
deleteAllDone.onclick = async function () {
  // 获取到所有已经完成的复选框的id
  const doneCheckInputs = document.querySelectorAll('.todo-main input[checked]')
  //先将伪数组转成数组,再调用map,得到存放了id的数组
  let ids = Array.from(doneCheckInputs).map((item) => item.dataset.id)
  //  console.log(ids);
  ids = JSON.stringify(ids)
  const todolist = await myAjax({
    url: 'http://127.0.0.1:5000/deleteTodos',
    type: 'post',
    data: {
      ids,
    },
  })

  render(todolist)
}
