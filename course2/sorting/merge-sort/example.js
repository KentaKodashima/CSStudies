/**
 * Merging arrays
 * 
 * - In order to implement merge sort, it's useful to first implement a function responsible for merging two sorted arrays
 * - Given two arrays which are sorted,
 *    this helper function should create a new array which is also sorted,
 *    and consists of all of the elements in the two input arrays
 * - This function should run in O(n+m) time and O(n+m) space and should not modify the parameters passed to it
 * 
 * - Create an empty array, take a look at the smallest values in each input array
 * - While there are still values we haven't looked at
 *      - If the value in the first array is smaller than the value in the second array,
 *          push the value in the first array into our results and move on to the next value in the first array
 *      - If the value in the first arra is larger thatn the value in the second array,
 *          push the value in the second array into out results and move on to the next value in the second array
 *      - Once it exhausts one array, push in all remaining values from the other array
*/
const merge = (arr1, arr2) => {
  let sortedArr = []
  let arr1Index = 0
  let arr2Index = 0
  
  while (arr1Index < arr1.length || arr2Index < arr2.length) {
    if (arr1Index === arr1.length) {
      sortedArr.push(arr2[arr2Index])
      arr2Index++
    } else if (arr2Index === arr2.length) {
      sortedArr.push(arr1[arr1Index])
      arr1Index++
    } else if (arr1[arr1Index] > arr2[arr2Index]) {
      sortedArr.push(arr2[arr2Index])
      arr2Index++
    } else if (arr2[arr2Index] > arr1[arr1Index]) {
      sortedArr.push(arr1[arr1Index])
      arr1Index++
    }
  }

  return sortedArr
}
// console.log(merge([1,10,50],[2,14,99,100]))
// console.log(merge([100],[1,2,3,14,99]))

// Provided solution
function merge2(arr1, arr2) {
  let results = []
  let i = 0
  let j = 0
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i])
    i++
  }
  while (j < arr2.length) {
    results.push(arr2[j])
    j++
  }
  return results
}



/**
 * Merge sort
 * 
 * - Break up the array into halves until you have arrays that are empty or have one element
 * - Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
 * - Once the array has been merged back together, return the merged (and sorted) array
*/
function mergeSort(arr) {
  if (arr.length <= 1) return arr

  let arrs = []
  let result = []

  for (let i = 0; i < arr.length; i++) {
    arrs.push(arr.slice(i, i+1))
  }

  for (let i = 0; i < arrs.length; i += 2) {
    let temp = arr[i+1] ? merge(arrs[i], arrs[i+1]) : arrs[i]
    if (result) {
      result = merge(result, temp)
    } else {
      result = temp
    }
  }

  return result
}
console.log(mergeSort([10,24,76,73,72,1,9]))

// Provided solution