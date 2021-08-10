setTimeout(() => {
  console.log('setTimeout')
}, 0)

setImmediate(() => {
  console.log('setImmediate')
})
// 优先执行
process.nextTick(() => {
  console.log('nextTick')
})

console.log('主线程')
