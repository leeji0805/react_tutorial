/**
 * a + b 를 리턴한다 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
export const add = (a, b) => a + b;

/**
* a - b 를 리턴한다 
* @param {*} a 
* @param {*} b 
* @returns 
*/
export const minus = (a, b) => a - b;

export const sumArray = (arr) => arr.reduce((acc, curr) => acc + curr, 0);