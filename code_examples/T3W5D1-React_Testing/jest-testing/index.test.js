const multiplication = require('./index.js')

describe('true is truthy and false is falsy', () => {
  test('true is truthy', () => {
    expect(true).toBe(true);
  });
 
  test('false is falsy', () => {
    expect(false).toBe(false);
  });
})	

describe('multiplication', () => {
	it('should multiply 7 with 8 and return 56', () => {
		expect(multiplication(7,8)).toEqual(56)
	})
})