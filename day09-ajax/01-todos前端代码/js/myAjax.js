// 封装的发送ajax请求的函数
function myAjax(options) {
  let { url, type = 'get', data } = options
  if (!url) return
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    data = data && obj2str(data)
    if (type === 'get') {
      url += `?${data}`
      data = null
    }
    xhr.open(type, url)
    if (type === 'post') {
      xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    }

    xhr.send(data)

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const data = JSON.parse(xhr.responseText)
          resolve(data)
        } else {
          reject()
        }
      }
    }
  })
}

function obj2str(obj) {
  if (!obj) return
  let arr = []
  for (let key in obj) {
    arr.push(`${key}=${obj[key]}`)
  }
  return arr.join('&')
}
