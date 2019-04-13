// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let intStr = n.toString()
  let isNegative = false
  let reversedStr = ''
  let result = 0

  for (let char of intStr) {
    if (char === '-') {
      isNegative = true
    } else {
      reversedStr = char + reversedStr
    }
  }

  if (isNegative) {
    result = parseInt(reversedStr) * -1
  } else {
    result = parseInt(reversedStr)
  }

  return result
}

module.exports = reverseInt;

// Other possible solution

// #1 Using Array.every()
// * This is not an ideal answer because there are
// every() returns true/false depends on the given condition.
// array.every(val => val > 5) return true if every element is true

// function reverseInt2(n) {
//   const reversed = n
//     .toString()
//     .split('')
//     .reverse()
//     .join('')
//
//   return parseInt(reversed) * Math.sign(n)
// }