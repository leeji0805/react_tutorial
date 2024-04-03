import { add } from './cal';
import { minus } from './cal';
import { sumArray } from './cal';
// 단일 테스트 케이스
test('adds 1 + 2 to equal 3', () => {
  const result = add(1, 2);
  expect(result).toBe(3);
});

// 여러 테스트 케이스를 포함하는 describe 블록
describe('add function tests', () => {
  // 여러 테스트 케이스
  const cases = [
    [2, 3, 5],
    [1, 3, 4],
    [4, 5, 9]
  ];

  // test.each를 사용하여 각 케이스에 대한 테스트 수행
  test.each(cases)(
    'adds %p + %p to equal %p', (a, b, expectedResult) => {
      expect(add(a, b)).toBe(expectedResult);
    }
  );
});

// minus 함수에 대한 테스트
describe('minus function tests', () => {
  test('subtracts 5 - 2 to equal 3', () => {
    expect(minus(5, 2)).toBe(3);
  });

  // 여러 테스트 케이스를 포함하는 경우
  const cases = [
    [5, 2, 3],
    [10, 3, 7],
    [4, 4, 0],
    [7, -2, 9],
    [5, -6, 11],
    [-5, 2, -7]
  ];

  test.each(cases)(
    'subtracts %p - %p to equal %p', (a, b, expectedResult) => {
      expect(minus(a, b)).toBe(expectedResult);
    }
  );
});

// sumArray 함수에 대한 테스트
describe('sumArray function tests', () => {
  test('sums [1, 2, 3, 4, 5] to equal 15', () => {
    expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
  });

  // 여러 배열에 대한 테스트 케이스
  const cases = [
    [[1, 2, 3], 6],
    [[-1, 1], 0],
    [[0, 0, 0, 1], 1]
  ];

  test.each(cases)(
    'sums %p to equal %p', (arr, expectedResult) => {
      expect(sumArray(arr)).toBe(expectedResult);
    }
  );
});