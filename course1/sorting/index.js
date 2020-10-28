// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

// Acsending order
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j+1]) {
        let smaller = arr[j+1]
        arr[j+1] = arr[j]
        arr[j] = smaller
      }
    }
  }

  return arr
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMinimumValue = i

    for (let j = i + 1; j < arr.length; j++) {
      // Find the minimum value
      if (arr[indexOfMinimumValue] > arr[j]) {
        indexOfMinimumValue = j
      }
    }

    // Swap the elements if i is not indexOfMinimumValue
    if (i !== indexOfMinimumValue) {
      let smaller = arr[indexOfMinimumValue]
      arr[indexOfMinimumValue] = arr[i]
      arr[i] = smaller
    }
  }

  return arr
}

function mergeSort(arr) {
  if (arr.length === 1) return arr

  const mid = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid)

  return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(left, right) {
  let results = []

  while (left.length !== 0 && right.length !== 0) {
    if (left[0] < right[0]) {
      results.push(left.shift())
    } else {
      results.push(right.shift())
    }
  }

  // Putting the remaining values all together
  return [...results, ...left, ...right]
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
