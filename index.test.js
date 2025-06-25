const {
  sum,
  getKeys,
  logObjectValues
 } = require('./index');

describe("sum()", () => {
  test('it correctly adds two intengers', () => {
    expect(sum(1, 3)).toBe(4);
  });
});

describe("getKeys()", () => {
  test('it returns an array', () => {
    expect(Array.isArray(getKeys({ a: 1, b: 2}))).toBe(true);
  });
});

describe("logObjectValues()", () => {
 
  test('values should have been logged', () => {
    const spy = jest.spyOn(console, 'log');
    logObjectValues({a: "a", b: "b", c: "c"});
    expect(spy).toHaveBeenCalledTimes(3);

    spy.mockRestore();
  });

  test('correct values should have been logged', () => {
    const spy = jest.spyOn(console, 'log');
    const results = ['a', 'b', 'c'];
    logObjectValues({a: "a", b: "b", c: "c"});
    spy.mock.calls.forEach((item, index) => {
      const [ value ] = item;
      expect(value).toBe(results[index]);
    })
  })
})
