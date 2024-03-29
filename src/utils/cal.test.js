import { add } from './cal';
import { sum } from './cal';
import { divide } from './cal';

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
  
  describe('divide function tests', () => {
    test('divides 10 by 2 to return quotient 5 and remainder 0', () => {
      expect(divide(10, 2)).toEqual({ quotient: 5, remainder: 0 });
    });
  
    // 여러 입력값에 대한 테스트 케이스
    const cases = [
      [10, 3, { quotient: 3, remainder: 1 }],
      [10, 0, undefined],
      [5, 2, { quotient: 2, remainder: 1 }],
      [6, 2, { quotient: 3, remainder: 0 }],
      [1.5, 0.5, { quotient: 3, remainder: 0 }],
      [0, 10, { quotient: 0, remainder: 0 }]
    ];
  
    test.each(cases)(
      'divides %p by %p to return %p', (a, b, expectedResult) => {
        expect(divide(a, b)).toEqual(expectedResult);
      }
    );
  });
  
  