/*


    cookie和session:

        cookie: 是浏览器的存储数据的容器
            有效期: 默认就是一个会话的时间(从发送请求到关闭浏览器)
                    自定义: maxAge: 单位是毫秒
        session: 服务器端存储数据的容器

    cookie和session配合解决http协议无状态的问题:

        1. 浏览器给服务器发送请求,服务器端校验
        2. 服务器端开启session,将用户信息存储到session中
        3. 服务器设置响应头,将sessionid响应给浏览器,
        4. 让浏览器将sessionid存储到cookie中
        5. 后面浏览器再次给服务器发送请求,则自动将sessionid上传给服务器,
        6. 服务器接收到之后,根据这个sessionid,去session中查找是否有指定空间,然后查看里面有没有指定数据
        7. 如果有,则认为登录. 如果没有就认为没有登录或已经退出


    ajax请求和响应:

        1. 创建xhr实例
        const xhr = new XMLHttpRequest()
        2. 设置请求方式和url地址
        xhr.open('请求方式', url地址)
        3. 设置请求头
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
        4. 发送请求
        xhr.send('键=值')

        5. 接收响应
        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    xhr.responsetText
                }
            }
        }





*/