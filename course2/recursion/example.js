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
  if (num === 1) return 1
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
  return num * factorial2(num - 1)
}



/**
 * Helper method recursion
*/
function collectOdds(nums) {
  let result = []

  function helper(helperInput) {
    if (helperInput.length === 0) return
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0])
    helper(helperInput.slice(1))
  }

  helper(nums)

  return result
}

// Pure recursion ver
function pureCollectOdds(nums) {
  let result = []

  if (nums.length === 0) return result
  if (nums[0] % 2 !== 0) result.push(nums[0])

  result = result.concat(pureCollectOdds(nums.slice(1)))

  return result
}
// pureCollectOdds([1,2,3,4,5])

// [1].concat(pureCollectOdds([2,3,4,5]))
// [].concat(pureCollectOdds([3,4,5]))
// [3].concat(pureCollectOdds([4,5]))
// [].concat(pureCollectOdds([5]))
// [5].concat(pureCollectOdds([]))

// [5].concat([])
// [].concat([5])
// [3].concat([5])
// [].concat([3,5])
// [1].concat([3,5])
// result = [1,3,5]