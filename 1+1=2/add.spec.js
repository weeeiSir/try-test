const add = require('./add')

test('1+1=2', () => {
  const fn = jest.fn(add)
	const a = 1
	const b = 1
	expect(fn(a, b)).toBe(2)
})