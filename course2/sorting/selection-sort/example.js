/**
 * Selection sort
 * 
 * A sorting algorithm where the smallest values sink to the bottom (opposite of bubble sort).
 * 
 * - Store the first element as the smallest value you've seen so far.
 * - Compare this item to the next item in the array until you find a smaller number.
 * - If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
 * - If the "minimum" is not the valur (index) you initially began with, swap the two values.
 * - Repeat this with the next element until the array is sorted.
*/

// This solutions works, but it contains unnecessary condition checks.
//  To avoid this, keep track of the lowest value just like the provided solution.
function selectionSort(arr) {
  const swap = (arr, index1, index2) => {
    const temp = arr[index1]
    arr[index1] = arr[index2]
    arr[index2] = temp
  }
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(i, j)
      if (arr[i] > arr[j]) swap(arr, i, j)
    }
  }
  return arr
}
console.log(selectionSort([5,3,4,1,2]))
console.log(selectionSort([34,22,10,19,17]))
console.log(selectionSort([5,3,4,1,2,34,22,10,19,17]))

// Provided solution
// function selectionSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     var lowest = i
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[lowest] > arr[j]) {
//         lowest = j
//       }
//     }
//     if (i !== lowest) {
//       var temp = arr[i]
//       arr[i] = arr[lowest]
//       arr[lowest] = temp
//     }
//   }
//   return arr
// }