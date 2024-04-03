/**
 * a + b 를 리턴한다 
>>>>>>> own/main
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
 * 두 숫자의 나눗셈 결과를 계산한다. 첫 번째 인자로 전달된 값(a)을 두 번째 인자(b)로 나눈 후,
 * 해당 결과의 몫과 나머지를 포함하는 객체를 반환한다. 인자 b가 0인 경우, 정의할 수 없으므로 undefined 반환.
 * 
 * 몫은 a / b의 결과에서 소수점 이하를 버림하여 계산한다(Math.floor 사용). 나머지는 a % b의 계산 결과에
 * b를 더한 값에 다시 b를 나눈 나머지로 계산한다 이는 목을 곱한 뒤 뺀 값을 알기 위함이다.(피연산자의 부호를 따르는 것을 방지)
 * 부동 소수점 연산의 정밀도 문제를 해결하기 위해, 나머지는 toFixed(10) 메소드를 사용하여
 * 소수점 아래 10자리까지 반올림된다. 이 값은 parseFloat을 통해 다시 숫자로 변환된다.
 * 결과적으로 계산된 나머지가 -0인 경우, 이를 0으로 조정한다.
 * 
 * @param {number} a 나누어지는 수.
 * @param {number} b 나누는 수. 0일 경우 함수는 undefined를 반환한다.
 * @returns {Object|undefined} 계산된 몫(quotient)과 나머지(remainder)를 포함하는 객체 또는 b가 0일 경우 undefined.
 */
 
export const divide = (a,b) => {
    if (b == 0){
        return undefined;
    } 
    const quotient = Math.floor(a / b);
    let remainder = ((a % b) + b) % b;
    remainder = parseFloat(remainder.toFixed(10));
    remainder = remainder === 0 ? 0 : parseFloat(remainder.toFixed(10));
    return {quotient, remainder}
}
/*
* a - b 를 리턴한다 
* @param {*} a 
* @param {*} b 
* @returns 
*/
export const minus = (a, b) => a - b;

export const sumArray = (arr) => arr.reduce((acc, curr) => acc + curr, 0);
