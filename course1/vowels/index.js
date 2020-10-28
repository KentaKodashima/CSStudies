// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let counter = 0

  for (let char of str.toLowerCase()) {
    for (let vowel of vowels) {
      if (char === vowel) {
        counter += 1
      }
    }
  }

  return counter
}

module.exports = vowels;

// Other solutions
// #1
// function vowels2(str) {
//   let count = 0
//   const checker = 'aeiou'
//
//   for (let char of str.toLowerCase()) {
//     if (checker.includes(char)) {
//       count++
//     }
//   }
//
//   return count
// }

// #2
// function vowels3(str) {
//   // g: it does not stop when it finds the first match
//   // i: case insensitive
//   const matches = str.match(/[aeiou]/gi)
//
//   return matches ? matches.length : 0
// }