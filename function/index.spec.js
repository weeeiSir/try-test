const Person = require("./Person.js");
const { callFn, returnFn } = require('./common')

const foo = require('./foo')
jest.mock('./foo')

// 测试套件
describe('function & class', () => {
	// 单个测试用例
  it('call other function', () => {
	//   准备数据
		callFn()
		// 断言
		expect(foo).toBeCalled()
	})

	it('return value', () => {
		const mockFn = jest.fn(returnFn)
		expect(mockFn(1)).toBe(2)
	})

	it.only("class change state", () => {
		const person = new Person();
		person.setName("张三");
		expect(person.getName()).toBe("张三")
	});
})