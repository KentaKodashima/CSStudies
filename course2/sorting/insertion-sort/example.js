/**
 * Insertion sort
 * 
 * Builds up the sort by gradually creating a larger left half which is always sorted.
 * 
 * - Start by picking the second element in the array.
 * - Compare the second element with the one before it and swap if necessary.
 * - Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (i.e. the left side) to place the element in the correct place.
 * - Repeat until the array is sorted.
*/
function insertionSort(arr) {
  let sortedIndex = 0
  while (sortedIndex < arr.length) {
    if (arr[sortedIndex] > arr[sortedIndex+1]) {
      for (let i = 0; i <= sortedIndex; i++) {
        if (arr[i] > arr[sortedIndex+1]) {
          let temp = arr[sortedIndex+1]
          arr.splice(sortedIndex+1, 1)
          arr.splice(i, 0, temp)
          sortedIndex++
          break
        }
      }
    }
    sortedIndex++
  }
  return arr
}
console.log(insertionSort([2,1,9,76,4]))

/**
 * Provided solution
*/
// function insertionSort2(arr){
// 	var currentVal;
//     for(var i = 1; i < arr.length; i++){
//         currentVal = arr[i];
//         for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//             arr[j+1] = arr[j]
//         }
//         arr[j+1] = currentVal;
//     }
//     return arr;
// }

// A solution found on the internet
// I don't like the provided solution because j is used out side of the for loop scope
// function insertionSort3(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let j = i - 1
//     let temp = arr[i]
//     while (j >= 0 && arr[j] > temp) {
//       arr[j + 1] = arr[j]
//       j--
//     }
//     arr[j+1] = temp
//   }
//   return arr
// }