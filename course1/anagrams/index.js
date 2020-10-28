// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let strDictA = { String: Number }
  let strDictB = { String: Number }
  let configuredStringA = stringA.replace(/[^\w]/g, '').toLowerCase()
  let configuredStringB = stringB.replace(/[^\w]/g, '').toLowerCase()

  for (let char of configuredStringA) {
    if (!strDictA[char]) {
      strDictA[char] = 1
    } else {
      strDictA[char] += 1
    }
  }

  for (let char of configuredStringB) {
    if (!strDictB[char]) {
      strDictB[char] = 1
    } else {
      strDictB[char] += 1
    }
  }

  let keysA = Object.keys(strDictA).length
  let keysB = Object.keys(strDictB).length

  if (keysA === keysB) {
    const keys = Object.keys(strDictA)
    for (let key of keys) {
      if (strDictA[key] !== strDictB[key]) {
        return false
      }
    }
  } else if (keysA !== keysB) {
    return false
  }

  return true
}

module.exports = anagrams;

// Other solution

// #1
// function anagrams2 (stringA, stringB) {
//   const aCharMap = buildCharMap(stringA)
//   const bCharMap = buildCharMap(stringB)
//
//   if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
//     return false
//   }
//
//   for (let char in aCharMap) {
//     if (aCharMap[char] !== bCharMap[char]) {
//       return false
//     }
//   }
//
//   return true
// }
//
// function buildCharMap(str) {
//   const charMap = {}
//
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1
//   }
//
//   return charMap
// }

// #2
// function anagrams3(stringA, stringB) {
//   return cleanString(stringA) === cleanString(stringB)
// }
//
// function cleanString(str) {
//   return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('')
// }