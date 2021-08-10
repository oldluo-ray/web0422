//需求: 模仿jquery的ajax函数,封装一个可以发送ajax的函数

function myAjax(options){

    let {url,type='get', data, success,error, complete,beforeSend,timeout = 3000,dataType='json'} = options
    // 判断是否传入url,如果没有,则直接return,不执行后续的代码
    if(!url)return 
    //创建xhr实例
    const xhr = new XMLHttpRequest()
    //设置超时: 
    xhr.timeout = timeout
    // 设置请求方式和url地址
    // 如果是get请求,要在url中拼接参数.如果是post请求就不拼接
    // 传入的数据是对象,所以先将对象转成键值对字符串才能拼接
    data = data && obj2str(data)
    if(type === 'get'){
        url+= `?${data}`
        data = null
    }
    xhr.open(type,url)
    // 设置请求头
    if(type === 'post'){
        xhr.setRequestHeader('content-type','application/x-www-form-urlencoded')
    }
    // 发送请求
    // if(type === 'get'){
    //     xhr.send()
    // }else{
    //     xhr.send(data)
    // }
    // 请求发送之前调用beforeSend
    // 只有返回的是false,才不发请求,其他情况一律发送请求
    const isSend = beforeSend && beforeSend()
    if(isSend === false) return
    xhr.send(data)

    // 响应
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4){
            complete && complete()
            if(xhr.status === 200){
                // let result
                // if(dataType === 'json'){
                //     result = JSON.parse(xhr.responseText)
                // }else{
                //     result = xhr.resposneText
                // }
                // 注意:三元运算符中不能有return
                let result = dataType === 'json' ?  JSON.parse(xhr.responseText) : xhr.responseText
                //成功
                success && success(result)
            }else{
                // 失败
                error && error()

            }
        }
    }
   

  

}

// 将对象转成键值对的字符串的函数
function obj2str(obj){
    if(!obj)return 
    // let str = ''
    // 由于字符串是不可变的,所以大量拼接字符串会占用很多的内存,所以如果遇到这种情况,建议大家使用数组进行拼接
    let arr = []
    for(let key in obj){
        // str += `${key}=${obj[key]}&`
        arr.push(`${key}=${obj[key]}`)
    }
    return arr.join('&')
}

