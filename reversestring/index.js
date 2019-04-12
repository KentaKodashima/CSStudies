// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  return str.split('').reverse().join('')
}

reverse('dasfaf')

module.exports = reverse;

// Other possible solutions

// #1 Without reverse()
// function reverse(str) {
//   let reversed = ''
//
//   for (let character of str) {
//     // The order matters because the new character has to come first
//     reversed = character + reversed
//   }
//
//   return reversed
// }

// #2 Using reduce()
// function reverse3(str) {
//   return str.split('').reduce((reversed, character) => character + reversed, '')
// }
