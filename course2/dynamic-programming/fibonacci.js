/**
 * Non-performant version
 * 
 * Time complexity: O(2^n) - 2 to the nth power
 * 
 * The problem:
 *    - Repeatition of exactly the same things (, which can be overlapped)
*/
function fibonacci(n) {
  if (n === 1 || n === 2) return 1
  return fibonnaci(n - 1) + fibonnaci(n - 2)
}

/**
 * Memoized solution
 * 
 * Time complexity: O(n)
 * 
*/
function memoizedFibonacci1(n, memo = []) {
  if (memo[n] !== undefined) return memo[n]
  if (n <= 2) return 1
  let res = fibonnaci(n-1, memo) + fibonnaci(n-2, memo)
  memo[n] = res
  return res
}

function memoizedFibonacci2(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n]
  let res = fibonnaci(n-1, memo) + fibonnaci(n-2, memo)
  memo[n] = res
  return res
}

/**
 * Tabulated solution
 * 
 * Time complexity: O(n)
*/
function tabulatedFibonacci(n) {
  if (n <= 2) return 1
  let fibNums = [0,1,1]
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i-1] + fibNums[i-2]
  }
  return fibNums[n]
}