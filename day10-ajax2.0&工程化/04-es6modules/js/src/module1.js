const fn = () => {
  console.log('module1-fn')
}

let obj = {
  xxx: 123,
}

let num = 123

// 统一导出
export { fn, obj, num }
// export { obj }
// export { num }
