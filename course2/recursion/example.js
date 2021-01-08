/**
 * Recursion
 * */

 // Recursive
function countDown(num) {
  if (num <= 0) {
    console.log('Done!')
  }

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



function sumRange(num) {
  if (num ===1) return 1
  return num + sumRange(num -1)
}

/**
 * sumRange(3) 
 * 
 * - return 3 + sumRange(2) --- 3: wait for sumRange(2) to return a value
 * - return 2 + sumRange(1) --- 1: wait for sumRange(1) to return a value
 * - return 1
*/



// Factorial