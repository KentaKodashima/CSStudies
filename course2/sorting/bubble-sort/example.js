/**
 * Built-in JS sort methods
*/

// ['Apple', 'Orange', 'Bananas', 'Peach'].sort() // [ 'Apple', 'Bananas', 'Orange', 'Peach' ]
[6, 4, 15, 10].sort() // [10,15,4,6]

// .sort() handles only string by default.
// To use it for numbers, we need to pass a callback to tell it how it should sort.
function numberCompare(num1, num2) {
  return num1 - num2
}
[6, 4, 15, 10].sort(numberCompare) // [4,6,10,15]

function compareByLen(str1, str2) {
  return str2.length - str1.length
}
['Apple', 'Orange', 'Bananas', 'Peach'].sort(compareByLen) // [ 'Bananas', 'Orange', 'Apple', 'Peach' ]



/**
 * Bubbdle sort
 * 
 * A sorting algorithm where the largest values bubble up to the top.
 * 
 * - Start looping with a variable called i from the end of the array towards the beginning
 * - Start an inner loop with a variable called j from the beginning until i - 1
 * - If arr[j] is greater than arr[j + 1], swap those two values
*/
function swap(arr, idx1, idx2) {
  let temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}

function bubbleSort(arr) {
  let copy = [...arr]
  for (let i = copy.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (copy[j] > copy[j+1]) {
        swap(copy, j, j+1)
      }
    }
  }
  return copy
}
console.log(bubbleSort([6, 4, 15, 10]), 'Bubble sort')

// Provided solution
// function bubbleSort2(arr) {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j+1]) {
//         swap(arr, j, j+1)
//       }
//     }
//   }
//   return arr
// }

// function bubbleSort2(arr) {
//   function swapHelper(arr, idx1, idx2) {
//     let temp = arr[idx1]
//     arr[idx1] = arr[idx2]
//     arr[idx2] = temp
//   }

//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j+1]) {
//         swapHelper(arr, j, j+1)
//       }
//     }
//   }
//   return arr
// }

// Optimized version
// It doesn't iterate through if it gets to the end
function bubbleSort2(arr) {
  let noSwaps
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1)
        noSwaps = false
      }
    }
    if (noSwaps) break
  }
  return arr
}