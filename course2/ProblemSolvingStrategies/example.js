// Understand the problem

// ========================================================
// Write a function which takes two numbers and returns their sum.
// ========================================================

// 1. Can I restate the problem in my own words?
// "Implement a function to add two numbers"

// 2. What are the inputs that fo into the problem?
// - ints?
// - floats?
// - string?

// 3. What are the outputs that should come from the solution to thr problem?
// - int?
// - float?
// - string?

// 4. Can the outputs be determined from the inputs? Do I have enough information to solve the problem?
// - Depends on 2 and 3

// 5. How should I lable the important pieces of data that are a part of the problem?


// Concrete examples

// ========================================================
// Write a function which takes in a string and returns counts of each character in the string.
// ========================================================
charCount("aaaa") // { a: 4 }
charCount("hello")  // { h: 1, e: 1, l: 2, o: 1 }
charCount("My phone number is 12345")  // Count spaces? or numbers? Is chapitalized char different from lower-cased chars?
charCount(123) // Edge cases like nums, arrays, objs, etc...


// Break it down

// ========================================================
// Write a function which takes in a string and returns counts of each character in the string.
// ========================================================
function charCount(str) {
  // make obj to return at the end
  // loop over str
  //    if the char is a key, increment the count
  //    if the char is not a key, add it to the obj
  //    if the chat is something else (spaces, periods, etc.), don't do anything
  // return obj at the end
}


// Solve/Simplify

// ========================================================
// Write a function which takes in a string and returns counts of each character in the string.
// ========================================================

// Considering the following function, start with whatwever that's familiar to you. (e.g. loop, counter, etc.)
function charCount2(str) {
  // make obj to return at the end
  let result = {}
  // loop over str
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase()
    //    if the char is a key, increment the count
    if (result[char]) {
      result[char]++
    }
    //    if the char is not a key, add it to the obj
    else {
      result[char] = 1
    }
  }
  //    if the chat is something else (spaces, periods, etc.), don't do anything

  // return obj at the end
  return result
}


// Look back and refactor

// ========================================================
// Write a function which takes in a string and returns counts of each character in the string.
// ========================================================

function charCountBefore(str) {
  let result = {}

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase()
    if (/[a-z0-9]/.test(char)) {
      if (result[char] > 0) {
        result[char]++
      } else {
        result[char] = 1
      }
    }
  }

  return result
}

function charCountAfter(str) {
  let result = {}

  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase()
      result[char] = ++result[char] || 1
    }
  }

  return result
}

// Faster than regex expressions
function isAlphaNumeric(char) {
  let code = char.charCodeAt(0)

  if (!(code > 47 && code < 58) && // numeric (0-9)
      !(code > 64 && code < 91) && // upper alpha (A-Z)
      !(code > 96 && code < 123)) { // lower alpha (a-z)
    return false
  }

  return true
}