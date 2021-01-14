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
  let middle
  let left = 0
  let right = sortedArr.length - 1

  while (left <= right) {
    middle = Math.floor((right + left) / 2)
    
    if (sortedArr[middle] === val) {
      return middle
    } else if (sortedArr[middle] > val) {
      right = middle - 1
    } else {
      left = middle + 1
    }
  }

  return -1
}
const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
// console.log(binarySearch(primes, 67))
// console.log(binarySearch([1,2,3,4,5],2))
// console.log(binarySearch([1,2,3,4,5],5))

// Provided solution
// function binarySearch2(arr, elem) {
//   var start = 0;
//   var end = arr.length - 1;
//   var middle = Math.floor((start + end) / 2);
//   while(arr[middle] !== elem && start <= end) {
//       if(elem < arr[middle]){
//           end = middle - 1;
//       } else {
//           start = middle + 1;
//       }
//       middle = Math.floor((start + end) / 2);
//   }
//   if(arr[middle] === elem){
//       return middle;
//   }
//   return -1;
// }

// // Refactored Version
// function binarySearch3(arr, elem) {
//   var start = 0;
//   var end = arr.length - 1;
//   var middle = Math.floor((start + end) / 2);
//   while(arr[middle] !== elem && start <= end) {
//       if(elem < arr[middle]) end = middle - 1;
//       else start = middle + 1;
//       middle = Math.floor((start + end) / 2);
//   }
//   return arr[middle] === elem ? middle : -1;
// }



/**
 * Naive string search
 * 
 *  - Loop over the longer string
 *  - Loop over the shorter string
 *  - If the characters don't match, break out of the inner loop
 *  - If the characters do match, keep going
 *  - If it completes the inner loop and finds a match, increment the count of matches
 *  - Return the count
*/
function naiveStringSearch(long, short) {
  let count = 0
  let maxIndex = short.length - 1

  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j <= short.length; j++) {
      if (long[i+j] !== short[j]) break
      if (long[i] === short[j] && j === maxIndex) count++
    }
  }

  return count
}

// Provided solution
function naiveStringSearch2(long, short) {
  let count = 0
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (long[i+j] !== short[j]) break
      if (j === short.length - 1) count++
    }
  }
  return count
}
console.log(naiveStringSearch('lorie loled', 'lol'))
console.log(naiveStringSearch2('lorie loled', 'lol'))