const { callFn, returnFn } = require('./common')
const foo = require('./foo')


// 调用其他函数
callFn()

// return value
console.log(returnFn(1)); 