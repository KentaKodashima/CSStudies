/**
 * Recursion
 * */

 // Recursive
function countDown(num) {
  // base case
  if (num <= 0) console.log('Done!')

  console.log(num)
  num--
  countDown(num)
}

// Non-recursive
function countDown2(num) {
  for (let i = num; i > 0; i--) {
    console.log(i)
  }

  console.log('Done')
}



/**
 * sumRange(3) 
 * 
 * - return 3 + sumRange(2) --- 3: wait for sumRange(2) to return a value
 * - return 2 + sumRange(1) --- 1: wait for sumRange(1) to return a value
 * - return 1
*/
function sumRange(num) {
  // base case
  if (num ===1) return 1
  return num + sumRange(num -1)
}


/**
 * Factorial
 * 
 * Formula:
 * 4! (4 * 3 * 2 * 1)
*/
// Iterative way
function factorial(num) {
  let total = 1

  for (let i = num; i > 0; i--) {
    total += i
  }

  return total
}

// Recursive way
function factorial2(num) {
  // base case
  if (num === 1) return 1
  return num * factorial(num - 1)
}