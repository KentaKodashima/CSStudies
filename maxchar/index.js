// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let strDict = { String: Number }
  let maxVal = 0
  let maxChar = ''

  for (let char of str) {
    if (!strDict[char]) {
      strDict[char] = 1
    } else {
      strDict[char] += 1
    }
  }

  for (let key in strDict) {
    if (strDict[key] > maxVal) {
      maxVal = strDict[key]
      maxChar = key
    }
  }

  return maxChar
}

module.exports = maxChar;
