/**
 * Radix sort helper methods
 * 
 * getDigit(num, place) - returns the digit in num at the given place value
 * digitCount(num) - returns the number of digits in num
 * 
*/
function getDigit(num, i) {
  // Math.abs is just to make it work with negative numbers
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}
// getDigit(7323, 2): (7323 / 100) % 10 = 3

function digitCount(num) {
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}
// digitCount(21388): 4 + 1 = 5
// * log10 means 10 to what power for it to give the number

function mostDigits(nums) {
  let maxDigits = 0
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }
  return maxDigits
}



/**
 * Radix sort
 * 
 * - Define a function that accepts lift of numbers
 * - Figure out how many digits the largest number has
 * - Loop from k = 0 up to this largest number of digits
 * - For each iteration of the loop:
 *      - Create buckets for each digit (0 - 9)
 *      - Place each number in the corresponding bucket based on its kth digit
 * - Replace our existing array with values in our buckets, starting with 0 and going up to 9
 * - Return the list
*/
// This solution isn't sorting properly
function radixSort(nums) {
  const maxNum = mostDigits(nums)
  let result = [...nums]
  for (let k = 0; k < maxNum; k++) {
    let buckets = [...Array(10)].map(e => Array())
    for (let i = 0; i < result.length; i++) {
      let bucketIndex = getDigit(result[i], k)
      buckets[bucketIndex].push(result[i])
    }
    result = [].concat(...buckets)
  }
  return result
}
console.log(radixSort([23,345,5467,12,2345,9852]))

// Provided answer
function radixSort2(nums){
  let maxDigitCount = mostDigits(nums);
  for(let k = 0; k < maxDigitCount; k++){
      let digitBuckets = Array.from({length: 10}, () => []);
      for(let i = 0; i < nums.length; i++){
          let digit = getDigit(nums[i],k);
          digitBuckets[digit].push(nums[i]);
      }
      nums = [].concat(...digitBuckets);
  }
  return nums;
}
console.log(radixSort2([23,345,5467,12,2345,9852]))