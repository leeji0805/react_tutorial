import { add } from './cal';

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
