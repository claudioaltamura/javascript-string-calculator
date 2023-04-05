const calculator = require('./calculator')
 
test('string with a 1,2 should result in 3', () => {
    expect(calculator.add('1,2')).toBe(3);
  });

test('string with three numbers should result in the sum of the numbers', () => {
  expect(calculator.add('1,2,3')).toBe(6);
});
