/**
 * power
 * 
 * Write a function called power which accepts a base and an exponent.
 * The function should return the power of the base to the exponent.
 * This function should mimic the functionality of Math.pow() - do not worry about negative bases and exponents.
*/

function power(base, exponent) {
  let total = 1

  function helper(currentExponent) {
    if (currentExponent === 0) return
    total *= base
    helper(currentExponent - 1)
  }

  helper(exponent)

  return total
}

// Sample outputs
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16
// console.log(power(2,0))
// console.log(power(2,2))
// console.log(power(2,4))

// Provided solution
// function power(base, exponent){
//   if(exponent === 0) return 1;
//   return base * power(base,exponent-1);
// }



/**
 * factorial
 * 
 * Write a function called factorial which accepts a number and returns the factorial of that number.
 * A factorial is the product of an integer and all the integers below it;
 * e.g., factorial four (4!) is equal to 24 because 4 * 3 * 2 * 1 equals 24.
 * factorial zero (0!) is always 1
*/

function factorial(num) {
  if (num === 1 || num === 0) return 1
  return num * factorial(num - 1)
}

// Sample outputs
// factorial(1) // 1
// factorial(2) // 2
// factorial(4) // 24
// factorial(7) // 5040
// console.log(factorial(1))
// console.log(factorial(2))
// console.log(factorial(4))
// console.log(factorial(7))

// Provided solution
// function factorial(x){
//   if (x < 0 ) return 0;
//   if (x <= 1 ) return 1;
//   return x * factorial(x-1);
// }



/**
 * productOfArray
 * 
 * Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
*/

function productOfArray(nums) {
  let total = 1

  function helper(helperNums) {
    if (helperNums.length === 0) return
    total *= helperNums[0]
    helper(helperNums.slice(1))
  }

  helper(nums)

  return total
}

// Sample outputs
// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60
// console.log(productOfArray([1,2,3]))
// console.log(productOfArray([1,2,3,10]))

// Provided solution
// function productOfArray(arr) {
//   if(arr.length === 0) {
//       return 1;
//   }
//   return arr[0] * productOfArray(arr.slice(1));
// }



/**
 * recursiveRange
 * 
 * Write a function called recursiveRange which accepts a nummber and adds up all the numbers from 0 to the number passed to the function.
*/

function recursiveRange(num) {
  if (num === 1) return 1
  return num + recursiveRange(num - 1)
}

// Sample outputs
// recursiveRange(6) // 21
// recursiveRange(10) // 55 
// console.log(recursiveRange(6))
// console.log(recursiveRange(10))

// Provided solution
// function recursiveRange(x){
//   if (x === 0 ) return 0;
//   return x + recursiveRange(x-1);
// }



/**
 * fib
 * 
 * Write a recursive function called fib which accepts a number and returns the nth number in the Fibinacci sequence.
 * Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.
 * */

function fib(n) {
  if (n < 2) return n

  return fib(n - 1) + fib(n - 2)
}

// Sample outputs
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

// Provided solution
// function fib(n){
//   if (n <= 2) return 1;
//   return fib(n-1) + fib(n-2);
// }