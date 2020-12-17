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