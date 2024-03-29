/**
 * a + b 를 리턴한다.  
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
export const add = (a, b) => a + b;

/**
 * 주어진 배열의 모든 요소의 합을 계산하여 반환한다.
 *
 * @param {Array<number>} arr 숫자로 이루어진 배열.
 * @returns {number} 배열 내 모든 요소의 합계.
 * 빈 배열일 경우 undefined를 반환한다.
 */
export const sum = (arr) =>{
    if(arr.length == 0){
        return undefined;
    }
    
    return arr.reduce((acc, curr) => acc + curr, 0);
}

/**
 * a / b와 a % b 를 리턴한다.
 * @param {*} a 
 * @param {*} b 
 * @returns {quotient, remainder} 목, 나머지
 * 
 */
export const divide = (a,b) => {
    if (b == 0){
        return undefined;
    } 
    let quotient = a / b;
  if (quotient < 0) {
    quotient = Math.ceil(quotient);
  } else {
    quotient = Math.floor(quotient);
  }
  let remainder = a - quotient * b;

  // 부동 소수점 오차 조정 및 -0 처리
  quotient = quotient === -0 ? 0 : quotient;
  remainder = parseFloat(remainder.toFixed(10));
  remainder = remainder === -0 ? 0 : remainder;

  return { quotient, remainder };
}
