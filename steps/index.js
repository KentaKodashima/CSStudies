// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  let counter = 1
  let tempArr = []
  while (counter <= n) {
    for (let i = 0; i < counter; i++) {
      tempArr.push('#')
    }
    while (tempArr.length < n) {
      tempArr.push(' ')
    }
    console.log(tempArr.join(''))
    tempArr = []
    counter++
  }
}

module.exports = steps;

// Other possible solutions

// #1
// function steps2(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = ''
//
//     for (let col = 0; col < n; col++) {
//       if (col < row) {
//         stair += '#'
//       } else {
//         stair += ' '
//       }
//     }
//
//     console.log(stair)
//   }
// }

// #2 recursion
function steps3(n, row = 0, stair = '') {
  // Completion
  if (n === row) {
    return
  }

  // Change the row
  if (n === stair.length) {
    console.log(stair)
    return steps3(n, row + 1)
  }

  // Add values to stair
  const add = stair.length <= row ? '#' : ' '
  // if (stair.length <= row) {
  //   stair += '#'
  // } else {
  //   stair += ' '
  // }

  steps3(n, row, stair + add)
}