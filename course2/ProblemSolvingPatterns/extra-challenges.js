/**
 * Frequency counter
 * 
 * Write a function called sameFrequency.
 * Given two positive integers, find out if the two numbers have the same frequency of digits.
 * The solution must have the complexity of O(n).
*/
function sameFrequency (num1, num2) {
  let counter1 = {}
  let counter2 = {}
  let num1Str = num1.toString()
  let num1Array = num1Str.split('').join()
  let num2Str = num2.toString()
  let num2Array = num2Str.split('').join()
  
  if (num1Array.length !== num2Array.length) return false

  for (let char of num1Array) {
    counter1[char] = (counter1[char] || 0) + 1
  }

  for (let char of num2Array) {
    counter2[char] = (counter2[char] || 0) + 1
  }

  for (let key in counter1) {
    if (counter1[key] !== counter2[key]) return false
  }

  return true
}

// Sample inputs
console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false
console.log('==========================================')

// Provided solutions
// function sameFrequency(num1, num2){
//   let strNum1 = num1.toString();
//   let strNum2 = num2.toString();
//   if(strNum1.length !== strNum2.length) return false;
  
//   let countNum1 = {};
//   let countNum2 = {};
  
//   for(let i = 0; i < strNum1.length; i++){
//     countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
//   }
  
//   for(let j = 0; j < strNum1.length; j++){
//     countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
//   }
  
//   for(let key in countNum1){
//     if(countNum1[key] !== countNum2[key]) return false;
//   }
 
//   return true;
// }



/**
 * Frequency counter / Multiple pointes
 * 
 * Implement a function called areThereDuplicates which accepts a variable number of arguments,
 *    and checks whether there are any duplicates among the arguments passed in.
 * Solve this problem using multiple pointer patter or frequency counter pattern.
*/

// Frequency counter pattern
// function areThereDuplicates(...args) {
//   let counter = {}

//   for (let val of args) {
//     counter[val] = (counter[val] || 0) + 1
//   }

//   for (let key in counter) {
//     if (counter[key] > 1) return true
//   }

//   return false
// }

// Multiple pointer pattern
function areThereDuplicates(...args) {
  let slow = 0
  let fast = 1

  while (slow < args.length) {
    if (args[slow] === args[fast]) {
      return true
    } else if (fast === args.length) {
      slow++
      fast = slow + 1
    } else {
      fast++
    }
  }

  return false
}

// Sample inputs
console.log(areThereDuplicates(1,2,3)) // false
console.log(areThereDuplicates(1,2,2)) // true
console.log(areThereDuplicates('a','b','c','a')) // true
console.log('==========================================')

// Provided solutions

// Frequency counter
// function areThereDuplicates() {
//   let collection = {}
//   for(let val in arguments){
//     collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
//   }
//   for(let key in collection){
//     if(collection[key] > 1) return true
//   }
//   return false;
// }

// Multiple pointes
// function areThereDuplicates(...args) {
//   // Two pointers
//   args.sort((a,b) => a > b);
//   let start = 0;
//   let next = 1;
//   while(next < args.length){
//     if(args[start] === args[next]){
//         return true
//     }
//     start++
//     next++
//   }
//   return false
// }

// One liner solution
// function areThereDuplicates() {
//   return new Set(arguments).size !== arguments.length;
// }



/**
 * Multiple pointers
 * 
 * Write a function called averagePair.
 * Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.
 * There may be more than one pair that matches the average target.
 * 
 * Time complexity: O(n)
 * Space complexity: O(1)
*/

function averagePair(arr, targetAverage) {
  const target = targetAverage * 2
  let fast = 0
  let slow = 1

  while (slow < arr.length) {
    let sum = arr[slow] + arr[fast]
    if (sum === target) {
      return true
    } else if (fast === arr.length) {
      slow++
      fast = slow + 1
    } else {
      fast++
    }
  }

  return false
}

// Sample inputs
console.log(averagePair([1,2,3],2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair([-1,0,3,4,5,6],4.1)) // false
console.log(averagePair([],4)) // false
console.log('==========================================')

// Provided solutions
// function averagePair(arr, num){
//   let start = 0
//   let end = arr.length-1;
//   while(start < end){
//     let avg = (arr[start]+arr[end]) / 2 
//     if(avg === num) return true;
//     else if(avg < num) start++
//     else end--
//   }
//   return false;
// }


/**
 * Multiple pointers
 * 
 * Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.
 * In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.
 * The solution must have at least the following complexities.
 * 
 * Time complexity: O(n + m)
 * Space complexity: O(1)
*/
function isSubsequence(str1, str2) {
  let str1Arr = str1.split('').join()
  let str2Arr = str2.split('').join()
  let str1Pointer = 0
  let str2Pointer = 0

  while (str1Pointer < str1Arr.length || str2Pointer < str2Arr.length) {
    if (str1Arr[str1Pointer] === str2Arr[str2Pointer]) {
      if (str1Pointer === str1Arr.length - 1) return true

      str1Pointer++
      str2Pointer++
    } else {
      if (str2Pointer === str2Arr.length - 1) return false

      str2Pointer++
    }
  }
}

// Sample inputs
console.log(isSubsequence('hello','hello world')) // true
console.log(isSubsequence('sing','sting')) // true
console.log(isSubsequence('abc','abracadabra')) // true
console.log(isSubsequence('abc','acb')) // false (order matters)
console.log('==========================================')

// Provided solutions

// Iterative
// function isSubsequence(str1, str2) {
//   var i = 0;
//   var j = 0;
//   if (!str1) return true;
//   while (j < str2.length) {
//     if (str2[j] === str1[i]) i++;
//     if (i === str1.length) return true;
//     j++;
//   }
//   return false;
// }

// Recursive (not O(1) space)
// function isSubsequence(str1, str2) {
//   if(str1.length === 0) return true
//   if(str2.length === 0) return false
//   if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
//   return isSubsequence(str1, str2.slice(1))
// }



/**
 * Sliding window
 * 
 * Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a sub array with the length of the number passed to the function.
 * Note that a subarray must consist of consecutive elements from the original array.
 * 
 * Time complexity: O(n)
 * Space complexity: O(1)
*/

function maxSubarraySum(arr, num) {
  if (num > arr.length) return null
  let maxSum = 0
  let tempSum = 0

  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }

  tempSum = maxSum

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    maxSum = Math.max(tempSum, maxSum)
  }

  return maxSum
}

// Sample inputs
console.log(maxSubarraySum([100,200,300,400],2))
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20],4))
console.log(maxSubarraySum([-3,4,0,-2,6,-1],2))
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2))
console.log(maxSubarraySum([2,3],3))

// Provided solution
// function maxSubarraySum(arr, num){
//   if (arr.length < num) return null;

//   let total = 0;
//   for (let i=0; i<num; i++){
//      total += arr[i];
//   }
//   let currentTotal = total;
//   for (let i = num; i < arr.length; i++) {
//      currentTotal += arr[i] - arr[i-num];
//      total = Math.max(total, currentTotal);
//   }
//   return total;
// }



/**
 * Sliding window
 * 
 * Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.
 * This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function.
 * If there isn't one, return 0 instead.
 * 
 * Time complexity: O(n)
 * Space complexity: O(1)
*/
function minSubArrayLen(arr, num) {
  let min = 0
  let current = 0
  let tempSum = 0

  tempSum = arr[current]

  for (let i = 1; i < arr.length; i++) {
    if (tempSum >= num) {
      min = i
      current++
    }
    tempSum += arr[i]
  }
}

// Sample inputs
console.log(minSubArrayLen([2,3,1,2,4,3],7)) // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2,1,6,5,4],9)) // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19],52)) // 1 -> because [G2] is greater than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5))
console.log(minSubArrayLen([4,3,3,8,1,2,3],11)) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0

// Provided solution
// function minSubArrayLen(nums, sum) {
//   let total = 0;
//   let start = 0;
//   let end = 0;
//   let minLen = Infinity;
 
//   while (start < nums.length) {
//     // if current window doesn't add up to the given sum then 
// 		// move the window to right
//     if(total < sum && end < nums.length){
//       total += nums[end];
// 			end++;
//     }
//     // if current window adds up to at least the sum given then
// 		// we can shrink the window 
//     else if(total >= sum){
//       minLen = Math.min(minLen, end-start);
// 			total -= nums[start];
// 			start++;
//     } 
//     // current total less than required total but we reach the end, need this or else we'll be in an infinite loop 
//     else {
//       break;
//     }
//   }
 
//   return minLen === Infinity ? 0 : minLen;
// }



/**
 * Sliding window
 * 
 * Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.
 * 
 * Time complexity: O(n)
*/
function findLongestSubstring() {
  let longest = 0
}

// Sample inputs
console.log(findLongestSubstring('')) // 0
console.log(findLongestSubstring('rithmschool')) // 7
console.log(findLongestSubstring('thisisawesome')) // 6
console.log(findLongestSubstring('thecatinthehat')) // 7
console.log(findLongestSubstring('bbbbbb')) // 1
console.log(findLongestSubstring('longestsubstring')) // 8
console.log(findLongestSubstring('thisishowwedoit')) // 6

// Provided solution
// function findLongestSubstring(str) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;
 
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//     }
//     // index - beginning of substring + 1 (to include current in count)
//     longest = Math.max(longest, i - start + 1);
//     // store the index of the next char so as to not double count
//     seen[char] = i + 1;
//   }
//   return longest;
// }