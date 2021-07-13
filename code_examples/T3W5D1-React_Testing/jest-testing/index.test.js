const { tax} = require('./index.js')

const multiplication = jest.fn(() => 56)

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

describe('something', () => {
  it('should do something', () => {
    expect(tax(100, 0.5)).toBe('$50')
  })
})
