// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let reversed = ''

  for (let char of str) {
    reversed = char + reversed
  }

  return reversed === str
}

module.exports = palindrome;

// Other possible solutions

// #1 Using Array.every()
// * This is not an ideal answer because there are
// every() returns true/false depends on the given condition.
// array.every(val => val > 5) return true if every element is true

// function palindrome(str) {
//   return str.split('').every((char, i) => {
//     return char === str[str.length - i - 1]
//   })
// }

// #2
// function reverse3(str) {
//   return str.split('').reduce((reversed, character) => character + reversed, '')
// }