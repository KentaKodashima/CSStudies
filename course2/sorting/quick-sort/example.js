/**
 * Pivot helper
 * 
 * - It will help to accept theree arguments: an array, a start index, and an end index
 *    (these can default to 0 and the array length minus 1, respectively)
 * - Grab the pivot from the start of the array
 * - Store the current pivot index in a variable (this will keep track of where the pivot should end up)
 * - Loop through the array from the start until the end
 *      - If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index
 * - Swap the starting element (i.e. the pivot) with the pivot index
*/

const swap = (arr, index1, index2) => {
  let temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

function pivot(arr, startIndex = 0, endIndex = arr.length - 1) {
  let pivotIndex = 0

  for (let i = startIndex + 1; i <= endIndex; i++) {
    if (arr[startIndex] > arr[i]) {
      swap(arr, pivotIndex + 1, i)
      pivotIndex++
    }
  }

  swap(arr, startIndex, pivotIndex)

  return pivotIndex
}
console.log(pivot([4,8,2,1,5,7,6,3]))

// Provided solution
function pivot2(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start]
  let swapIdx = start

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }

  swap(arr, start, swapIdx)

  return swapIdx
}



/**
 * Quick sort
 * 
 * - Call the pivot helper on the array
 * - When the helper returns to you the updated pivot index,
 *    recursively call the pivot helper om the subarray to the left of that index,
 *    and the subarray to the right of that index
 * - Your base case occurs when you consider a subarray with less than 2 elements
 * 
 * quickSort([4,6,9,1,2,5,3])
 * [4,6,9,1,2,5,3]
 * [3,2,1,4,6,9,5]
 *        4
 * [3,2,1]  [6,9,5]
 *      3      6
 * [2,1]    [5] [9]
 *    2
 * [1]
*/
function quickSort(arr, left = 0, right = arr.length - 1) {
  if (arr.length <= 1) return arr
  let pivotIndex = pivot(arr)
  quickSort(arr.slice(0, pivotIndex))
  quickSort(arr.slice(0, pivotIndex))
  return arr
}

console.log(quickSort([4,6,9,1,2,5,3]))