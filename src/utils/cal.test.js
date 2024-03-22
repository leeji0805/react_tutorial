import { add } from './cal';

test('adds 1 + 2 to equal 3', () => {
  const result = add(1, 2);
  expect(result).toBe(3);
});

describe('add test', () => {
    // add test cases here
    const cases = [
        [1, 2, 3],
        [2, 5, 7],
        [5, 4, 9],
    ];
    test.each(cases)(
        'test case %p + %p = %p',
        (a, b, expected) => {
            expect(add(a, b)).toBe(expected);
        }
    );
});
