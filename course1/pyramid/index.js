// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const colNum = n + (n - 1)
  const middle = Math.floor(colNum / 2)

  for (let row = 0; row < n; row++) {
    let stair = ''

    for (let col = 0; col < colNum; col++) {
      if (middle - row <= col && middle + row >= col) {
        stair += '#'
      } else {
        stair += ' '
      }
    }

    console.log(stair)
  }
}

module.exports = pyramid;

// Other solutions
// #1
// function pyramid2(n) {
//   const midpoint = Math.floor((2 * n - 1) / 2)
//
//   for (let row = 0; row < n; row++) {
//     let level = ''
//
//     for (let col = 0; col < 2 * n - 1; col++) {
//       if (midpoint - row <= col && midpoint + row >= col) {
//         level += '#'
//       } else {
//         level += ' '
//       }
//     }
//
//     console.log(level)
//   }
// }

// #2 Recursive
// function pyramid3(n, row = 0, level = '') {
//   if (row === n) {
//     return
//   }
//
//   if (level.length === 2 * n - 1) {
//     console.log(level)
//     return pyramid(n, row + 1)
//   }
//
//   const midpoint = Math.floor((2 * n - 1) / 2)
//   let add
//   if (midpoint - row <= level.length && midpoint + row >= level.length) {
//     add = '#'
//   } else {
//     add = ' '
//   }
//
//   pyramid3(n, row, level + add)
// }