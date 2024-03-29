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
 */
export const divide = (a,b) => {
    if (b == 0){
        return undefined;
    } 
    return {quotient:Math.floor(a/b), remainder:a % b}
}