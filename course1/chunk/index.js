// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  let limit = array.length % size !== 0 ? (array.length / size) + 1 : array.length / size
  let index = 0
  let arrCount = 0
  let tempArr = []
  let resultArr = []

  while (arrCount < limit) {
    for (let i = 0; i < size; i++) {
      if (array[index] === undefined) {
        arrCount++
        break // break out from both 'for' and 'while'
      }
      tempArr.push(array[index])
      index++
    }
    resultArr.push(tempArr)
    tempArr = []
    arrCount++
  }

  return resultArr
}

// Second solution
// function chunk2(array, size) {
//   const chunked = []
//   let index = 0
//
//   while (index < array.length) {
//     chunked.push(array.slice(index, index + size))
//     index += size
//   }
//
//   return chunked
// }

module.exports = chunk;

// Other possible solution
// #1
// function chunk2(array, size) {
//   const chunked = []
//
//   for (let element of array) {
//     const last = chunked[chunked.length - 1]
//
//     if (!last || last.length === size) {
//       // Add new array
//       chunked.push([element])
//     } else {
//       // Add new element to the existing array until it reaches to size
//       last.push(element)
//     }
//   }
//
//   return chunked
// }