// 需求1: 获取任务列表信息,渲染到页面上
//定义用来接收jsonp跨域数据的函数
function callback(data) {
  //   console.log(data)
  // 动态的根据数据,创建li标签

  // 渲染列表
  let arr = data.map((item) => {
    return `<li>
                <label>
                    <input type="checkbox" ${item.isDone ? 'checked' : ''}/>
                    <span class=${item.isDone ? 'active' : ''}>${
      item.todoName
    }</span>
                </label>
                <button class="btn btn-danger">删除</button>
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
// 获取所有数据使用的是jsonp技术,所以动态创建script标签,发送请求

const script = document.createElement('script')
script.src = 'http://127.0.0.1:5000/findTodos?callback=callback'
document.body.appendChild(script)
