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
console.log('==============================================')

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

/**
 * Count unique values
 * 
 * Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array.
 * There can be negative numbers in the array, but it will always be sorted.
*/

function countUniqueValues(arr) {
  let slow = 0
  let fast = 1
  let uniqueVals = []

  while (slow < arr.length) {
    if (arr[slow] === arr[fast]) {
      fast++
    } else {
      uniqueVals.push(arr[slow])
      slow = fast
    }
  }

  return uniqueVals.length
}

console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2,-1,-1,-0,1])) // 4
console.log('==============================================')

// Another solution
function countUniqueValues2(arr) {
  let i = 0
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++
      arr[i] = arr[j]
    }
  }
  return i + 1
}