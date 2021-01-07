/**
 * Frequency counter
 * 
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the array has it's correcsponding value squared in the second array.
 * The frequency of value must be the same.
 * 
 * Note:
 *  - "**" is the exponentiation operator and is the equivalent of Math.pow().
 * */

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false

  let counter1 = {}
  let counter2 = {}

  for (let val of arr1) {
    counter1[val] = (counter1[val] || 0) + 1
  }

  for (let val of arr2) {
    counter2[val] = (counter2[val] || 0) + 1
  }

  for (let key in counter1) {
    if (!(key ** 2 in counter2)) return false
    if (counter2[key ** 2] !== counter1[key]) return false
  }

  return true
}


same([1,2,3], [4,1,9]) // true
same([1,2,3], [1,9]) // false
same([1,2,1], [4,4,9]) // false (frequency has to be the same)


/**
 * Mulltiple pointers
 * 
 * Write a function called sumZero which accepts a sorted array of integers.
 * The function should find the first pair where the sum is 0.
 * Return an array that includes both values that sum to zero or undefined if a pair does not exist.
 * */

 /**
  * Naive version
  * 
  * Time complexity: O(n^2) - Quadratic
  * Space complexity: O(1)
 */
function sumZeroE(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]]
      }
    }
  }
}

 /**
  * Pointer version
  * 
  * Time complexity: O(n)
  * Space complexity: O(1)
 */
function sumZero(arr) {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    let sum = arr[left] + arr[right]
    if (sum === 0) {
      return [arr[left], arr[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}

sumZero([-3,-2,-1,0,1,2,3]) // [-3, 3]
sumZero([-2,0,1,3]) // undefined
sumZero([1,2,3]) // undefined


/**
 * Sliding window
 * 
 * Write a function called maxSubarraySum which accepts an array of integers and a number called n.
 * The function should calculate the maximum sum of n consecutive elements in the array.
 * */

/**
* Naive version
* 
* Time complexity: O(n^2)
*/
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null
  }

  let max = -Infinity
  for (let i = 0; i < num; i++) {
    let temp = 0

    for (let j = 0; j < num; j++) {
      temp += arr[i + j]
    }

    if (temp > max) {
      max = temp
    }
  }

  return max
}


/**
* Sliding window approach
* 
* Time complexity: O(n)
*/
function maxSubarraySum(arr, num) {
  if (arr.length < num) return null

  let maxSum = 0
  let tempSum = 0

  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }

  tempSum = maxSum

  for (let i = num; i < arr.length; i++) {
    // Subtract the first num and add a new num - this is called sliding
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(maxSum, tempSum)
  }

  return maxSum
}

maxSubarraySum([1,2,5,2,8,1,5],2) // 10
maxSubarraySum([1,2,5,2,8,1,5],4) // 17
maxSubarraySum([4,2,1,6],1) // 6
maxSubarraySum([4,2,1,6,2],4) // 13
maxSubarraySum([],4) // null


/**
* Devide and conquer
* 
* Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located.
* If the value is not found return -1.
*/

/**
* Naive version - Linear search
* 
* Time complexity: O(n)
*/
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i
    }
  }
  return -1
}

/**
* Devide and conquer approach - Binary search
* 
* Time complexity: Log(n)
*/
function search(arr, val) {
  let min = 0
  let max = arr.length - 1

  while (min <= max) {
    let middle = Math.floor((min + max) / 2)
    let currentElement = arr[middle]

    if (arr[middle] < val) {
      max = middle + 1
    } else if (arr[middle] > val) {
      max = middle - 1
    } else {
      return middle
    }
  }

  return -1
}