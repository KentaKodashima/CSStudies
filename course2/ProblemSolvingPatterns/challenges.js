/**
 * Anagrams
 * 
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
 * 
 * Possible edge cases
 *  - spaces
 *  - Capitalized chars
*/

function isValidAnagram(str1, str2) {
  if (str1.length !== str2.length) return false

  let counter1 = {}
  let counter2 = {}

  for (char of str1) {
    counter1[char] = (counter1[char] || 0) + 1
  }
  for (char of str2) {
    counter2[char] = (counter2[char] || 0) + 1
  }

  for (key in counter1) {
    if (!counter2[key] || counter1[key] !== counter2[key]) return false
  }

  return true
}

console.log(isValidAnagram('', '')) // true
console.log(isValidAnagram('aar', 'rra')) // false
console.log(isValidAnagram('anagram', 'nagaram')) // true
console.log(isValidAnagram('awesome', 'awesom')) // false

// Another solution
function isValidAnagram2(str1, str2) {
  if (str1.length !== str2.length) return false

  let lookup = {}

  for (let i = 0; i < str1.length; i++) {
    let letter = str1[i]
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
  }

  for (let i = 0; i < str2.length; i++) {
    let letter = str2[i]

    if (!lookup[letter]) {
      return false
    } else {
      lookup[letter] -= 1
    }
  }

  return true
}