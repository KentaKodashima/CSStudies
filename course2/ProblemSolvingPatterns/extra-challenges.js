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

// Sample outputs
console.log(sameFrequency(182, 281)) // true
console.log(sameFrequency(34, 14)) // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)) // false


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
    }
  }

  return false
}

// Sample outputs
console.log(areThereDuplicates(1,2,3)) // false
console.log(areThereDuplicates(1,2,2)) // true
console.log(areThereDuplicates('a','b','c','a')) // true