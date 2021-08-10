
// 获取用户名表单项,给用户名表单项注册 input事件
const username = document.querySelector('input[type=text]')
const password =  document.querySelector('input[name=password]')
const loginBtn = document.querySelector('input[type=submit]')
username.oninput = function(){
   //获取用户输入的内容
   const value = this.value.trim();
   if(!value)return 
   //校验
   const reg = /^Web\w{5,9}$/
   const result = reg.test(value)
   //根据校验结果给用户提示不同的信息
   const span = this.nextElementSibling
   if(result){
    //提示用户用户名书写符合规范
    span.textContent = '用户名符合规则'
    span.style.color = 'green'
    

   }else{
    //提示用户用户名书写不符合规范
    span.textContent = '用户名不符合规则'
    span.style.color = 'red'
   }
}
password.oninput = function(){
    //获取用户输入的内容
    const value = this.value.trim();
    if(!value)return 
    //校验
    const reg = /^\w{5,9}$/
    const result = reg.test(value)
    //根据校验结果给用户提示不同的信息
    const span = this.nextElementSibling
    if(result){
     //提示用户用户名书写符合规范
     span.textContent = '密码符合规则'
     span.style.color = 'green'
     
 
    }else{
     //提示用户用户名书写不符合规范
     span.textContent = '密码不符合规则'
     span.style.color = 'red'
    }
   
}

// 点击注册按钮,判断上面的三个表单项是否符合要求,如果不符合要求,就不发送请求
loginBtn.onclick = function(e){
    // 判断
    const usernameFlag = username.nextElementSibling.style.color
    const passwordFlag = password.nextElementSibling.style.color
    if(usernameFlag !== 'green' || passwordFlag !== 'green'){
        e.preventDefault()
    }
}

