/**
 * Linear search
 * 
 * Search through an array starting from 0 to the target value.
*/

function linearSearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i
  }
  return -1
}

// Provided solution
// Exactly the same as my solution



/**
 * Binary search
 * 
 * This function accepts a sorted array and a value.
 * Create a left pointer at the start of the array.
 * While the left pointer comes before the right pointer.
 *  - Create a pointer in the middle
 *  - If you find the value you want, return the index
 *  - If the value is too small, msove the left pointer up
 *  - If the value is too large, move the right pointer down
 * If you never find the value return -1.
 * 
 * Refs:
 *  - https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
*/

function binarySearch(sortedArr, val) {
  let middle = Math.floor((sortedArr.length - 1) / 2)
  let left = 0
  let right = sortedArr.length - 1

  while (left < right) {
    console.log(left,'left')
    console.log(right, 'right')
    console.log(middle,'middle')
    if (sortedArr[middle] > val) {
      right = middle - 1
      middle = Math.floor((right + left) / 2)
    } else if (sortedArr[middle] < val) {
      left = middle + 1
      middle = Math.floor((right + left) / 2)
    } else if (sortedArr[middle] === val) {
      return middle
    } else {
      return -1
    }
  }
}
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
// console.log(binarySearch(primes, 67))
console.log(binarySearch([1,2,3,4,5],2))
// console.log(binarySearch([1,2,3,4,5],5))