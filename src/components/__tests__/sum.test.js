import { sum } from '../sum';

test('Sum function should calculate the sum of two numbers', () => {
  const result = sum(4, 5);

  // assertion
  expect(result).toBe(9);
});
