const foo = require('./foo')
module.exports={
	callFn: () => foo(),
	returnFn: value => value * 2
}