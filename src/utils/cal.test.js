import { add } from './cal';
import { sum } from './cal';
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


// sum함수에 대한 테스트
describe('sum function tests', () => {
    test('sums [1, 2, 3, 4, 5] to equal 15', () => {
      expect(sum([1, 2, 3, 4, 5])).toBe(15);
    });
  
    // 여러 배열에 대한 테스트 케이스
    const cases = [
      [[1, 2, 3], 6],
      [[-1, 1], 0],
      [[0, 0, 0, 1], 1]
    ];
  
    test.each(cases)(
      'sums %p to equal %p', (arr, expectedResult) => {
        expect(sum(arr)).toBe(expectedResult);
      }
    );
  });